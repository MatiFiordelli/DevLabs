import { Dispatch, FormEvent, SetStateAction } from "react";

export interface EntryType {
	entryText: string;
	updatedText?: string;
	isEditButtonActive?: boolean;
	i?: number;
	_id?: string;
}

export interface EntryRowContextType {
	entry: EntryType;
	i: number;
}

export interface TodoContextType {
	onSubmitFormTodoEntry: (e: FormEvent<HTMLFormElement>) => void;
	todoEntriesList: EntryType[];
	onDeleteEntry: (i: number) => void;
	onEditEntry: (i: number, inputElement?: string) => void;
	localEntry: EntryType;
	setLocalEntry: Dispatch<SetStateAction<EntryType | null>>;
	shouldAnimateEntries: boolean;
	setShouldAnimateEntries: Dispatch<SetStateAction<boolean>>;
	isAddingNewRemoteEntry: boolean;
}
