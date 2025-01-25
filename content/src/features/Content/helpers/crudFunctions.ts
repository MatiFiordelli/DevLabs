import { Dispatch, FormEvent, SetStateAction } from 'react';
import { EntryType } from '../types';
import { isItARepeatedEntry, isValidLength } from './validationFunctions';
import { useErrorMessages } from '../../../hooks/useErrorMessages';
import { endpoints } from './endpoints';

export const onEditEntry = async (
    i: number,
    todoEntriesList: EntryType[] | null,
    localEntry: EntryType,
    emailFromToken: string | null,
    setTodoEntriesList: Dispatch<SetStateAction<EntryType[] | null>>,
    setLocalEntry: Dispatch<SetStateAction<EntryType | null>>,
) => {
    const { getErrorMessage } = useErrorMessages();

    if (!todoEntriesList) {
        return;
    }

    const updatedState = await Promise.all(
        todoEntriesList?.map(async (entry, index) => {
            if (index === i) {
                if (
					entry.isEditButtonActive &&
					isItARepeatedEntry(
						localEntry?.updatedText as string,
						todoEntriesList,
					)
				) {
					alert(getErrorMessage('repeatedEntry'));
					return { ...entry, isEditButtonActive: false };
				}

                if (!isValidLength(localEntry?.updatedText)) {
                    alert(getErrorMessage('wrongLength'));
                    return { ...entry, isEditButtonActive: false };
                }

                if (
                    entry.isEditButtonActive &&
                    entry.entryText !== localEntry?.updatedText &&
                    emailFromToken
                ) {
                    try {
                        const response = await fetch(
                            `${endpoints['url-base']}/${entry._id}`,
                            {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                                },
                                body: JSON.stringify({
                                    email: emailFromToken,
                                    task: localEntry?.updatedText,
                                    token: localStorage.getItem('token'),
                                }),
                            },
                        );
                        const data = await response.json();

                        if (data.message === 'OK') {
                            alert('Successfully updated!');
                            return {
                                ...entry,
                                entryText: localEntry?.updatedText as string,
                                isEditButtonActive: !entry.isEditButtonActive,
                            };
                        } else {
                            alert(`Unable to update entry. ${data.message}`);
                            return {
                                ...entry,
                                isEditButtonActive: !entry.isEditButtonActive,
                            };
                        }
                    } catch (err) {
                        console.log(err);
                        alert('Unable to update entry. Try again in a few moments.');

                        return {
                            ...entry,
                            isEditButtonActive: !entry.isEditButtonActive,
                        };
                    }
                } else {
                    return {
                        ...entry,
                        isEditButtonActive: !entry.isEditButtonActive,
                    };
                }
            }
            return { ...entry, isEditButtonActive: false };
        }),
    );
    
    /* if (typeof updatedState === 'object')  */setTodoEntriesList([...updatedState]);
    setLocalEntry({
        entryText: '',
        updatedText: '',
        i: -1,
    });
};

export const onDeleteEntry = (
    i: number,
    emailFromToken: string | null,
    todoEntriesList: EntryType[] | null,
    setTodoEntriesList: Dispatch<SetStateAction<EntryType[] | null>>,
) => {
    if (todoEntriesList && emailFromToken) {
        fetch(`${endpoints['url-base']}/${todoEntriesList?.[i]._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
                email: emailFromToken,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === 'OK') {
                    setTodoEntriesList(
                        todoEntriesList?.filter((_, index) => index !== i),
                    );
                    alert('Successfully deleted!');
                } else {
                    alert(`Unable to delete entry. ${data.message}`);
                }
            })
            .catch((err) => {
                console.log(err);
                alert('Unable to delete entry. Try again in a few moments.');
            });
    }
};

export const onSubmitFormTodoEntry = (
    e: FormEvent<HTMLFormElement>,
    paramsForFunctionHandler: any,
) => {
    e.preventDefault();
    const { getErrorMessage } = useErrorMessages();
    const [
        localEntry,
        todoEntriesList,
        emailFromToken,
        setIsAddingNewRemoteEntry,
        setShouldAnimateEntries,
        setTodoEntriesList,
        setLocalEntry,
    ] = paramsForFunctionHandler;

    if (isValidLength(localEntry?.entryText)) {
        if (
            !isItARepeatedEntry(
                localEntry?.entryText as string,
                todoEntriesList,
            )
        ) {
            if (todoEntriesList && localEntry?.entryText) {

                setIsAddingNewRemoteEntry(true);
                fetch(`${endpoints['url-base']}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                    body: JSON.stringify({
                        email: emailFromToken,
                        task: localEntry?.entryText,
                        token: localStorage.getItem('token'),
                    }),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.message === 'OK') {
                            const entriesListLength =
                                data.updatedDocument.tasks.length;
                            setShouldAnimateEntries(true);
                            setTodoEntriesList([
                                ...todoEntriesList,
                                {
                                    entryText: (localEntry?.entryText).trim(),
                                    isEditButtonActive: false,
                                    _id: data.updatedDocument.tasks[
                                        entriesListLength - 1
                                    ]._id,
                                },
                            ]);
                        } else {
                            alert(`Unable to add entry. ${data.message}`);
                        }
                        setIsAddingNewRemoteEntry(false);
                    })
                    .catch((err) => {
                        console.log(err);
                        setIsAddingNewRemoteEntry(false);
                    });
            }

            //Reset the Add Input every time a new entry is added
            setLocalEntry({ ...localEntry, entryText: '' });
        } else {
            alert(getErrorMessage('repeatedEntry'));
        }
    } else {
        alert(getErrorMessage('wrongLength'));
    }
};

export const getAllEntries = (
    emailFromToken: string | null,
    setTodoEntriesList: Dispatch<SetStateAction<EntryType[] | null>>,
    setShouldAnimateEntries: Dispatch<SetStateAction<boolean>>,
) => {
    if (emailFromToken) {
        fetch(`${endpoints['url-base']}?email=${emailFromToken}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.tasks.length === 0) {
                    setTodoEntriesList([]);
                    return;
                }
                const tasks = data.tasks.map(
                    (t: { title: string; _id: string }, i: number) => {
                        return {
                            entryText: t.title,
                            isEditButtonActive: false,
                            _id: data.tasks[i]._id,
                        };
                    },
                );
                setShouldAnimateEntries(false);
                setTodoEntriesList(tasks);
            })
            .catch((err) => console.log(err));
    }
};
