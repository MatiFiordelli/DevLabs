import React, { FormEvent, useEffect, useState } from "react";
import TodoListComponent from "../../presentational/templates/TodoListComponent";
import { EntryType } from "../../types";
import { TodoContext } from "../../contexts";
import { useErrorMessages } from "../../../../hooks/useErrorMessages";
import { jwtDecode } from "jwt-decode";

export default function TodoContainer() {
	const [todoEntriesList, setTodoEntriesList] = useState<EntryType[]>([]);
	const [localEntry, setLocalEntry] = useState<EntryType | null>({
		entryText: "",
		updatedText: "",
		i: -1,
	});
	const [shouldAnimateEntries, setShouldAnimateEntries] = useState(true);
	const [emailFromToken, setEmailFromToken] = useState(null)
	const {getErrorMessage} = useErrorMessages()

	const isItARepeatedEntry = (entry: string) => {
		return todoEntriesList.some((e)=>e.entryText===entry)
	}

	const isValidLength = (entry: string = "") => {
		 return (entry.length>=3 && entry.length<=50)			
	}

	
	const onSubmitFormTodoEntry = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if(isValidLength(localEntry?.entryText)) {
			if(!isItARepeatedEntry(localEntry?.entryText as string)){
				if (todoEntriesList && localEntry?.entryText) {

					fetch('https://dev-labs-microservices-todo-crud.vercel.app/api/todos', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${localStorage.getItem('token')}`
						},
						body: JSON.stringify({
							email: emailFromToken,
							task: localEntry?.entryText,
							token: localStorage.getItem('token')
						})
					})
						.then((res)=>res.json())
						.then((data)=>{
							const entriesListLength = data.updatedDocument.tasks.length
							setShouldAnimateEntries(true)
							setTodoEntriesList([
								...todoEntriesList,
								{ 
									entryText: (localEntry?.entryText).trim(), 
									isEditButtonActive: false,
									_id: data.updatedDocument.tasks[entriesListLength-1]._id
								},
							]);
						})
						.catch((err)=>{
							console.log(err)
							alert('Unable to add entry. Try again in a few moments.')
						})
				}

				//Reset the Add Input every time a new entry is added
				setLocalEntry({...localEntry, entryText: ""})
				
			} else {
				alert(getErrorMessage('repeatedEntry'));
			}
		}else {
			alert(getErrorMessage('wrongLength'))			
		}
	};
	
	const onDeleteEntry = (i: number) => {
		if (todoEntriesList) {
			fetch(`https://dev-labs-microservices-todo-crud.vercel.app/api/todos/${todoEntriesList?.[i]._id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: emailFromToken,
					//token: localStorage.getItem('token')
				})
			})
				.then((res)=>res.json())
				.then(()=>{
					setTodoEntriesList(todoEntriesList?.filter((_, index) => index !== i));		
					alert('Successfully deleted!')
				})
				.catch((err)=>{
					console.log(err)
					alert('Unable to delete entry. Try again in a few moments.')
				})
		}
	};

	const onEditEntry = (i: number) => {
		const updatedState = todoEntriesList.map((entry, index) => {
			if (index === i) {

				//agregar if isItARepeatedEntry!!
				if(!isValidLength(localEntry?.updatedText)) {
					alert(getErrorMessage('wrongLength'))
					return { ...entry, isEditButtonActive: false };
				} else {
					
					if (entry.isEditButtonActive && entry.entryText!==localEntry?.updatedText) { 
						fetch(`https://dev-labs-microservices-todo-crud.vercel.app/api/todos/${entry._id}`, {
							method: 'PUT',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify({
								email: emailFromToken,
								task: localEntry?.updatedText,
								token: localStorage.getItem('token')
							})
						})
							.then((res)=>res.json())
							.then((data)=>{
								data.message === 'OK' && alert('Successfully updated!')

								return {
									...entry,
									entryText: localEntry?.updatedText as string, 
									isEditButtonActive: !entry.isEditButtonActive,
								};
							})
							.catch((err)=>{
								console.log(err)
								alert('Unable to update entry. Try again in a few moments.')
							})
					} 

					return {
						...entry,
						entryText: entry.isEditButtonActive ? localEntry?.updatedText as string : entry.entryText, 
						isEditButtonActive: !entry.isEditButtonActive,
					};
				}
			}
			return { ...entry, isEditButtonActive: false };
		});

		setTodoEntriesList([...updatedState]);
		setLocalEntry({
			entryText: "",
			updatedText: "",
			i: -1,
		})
	};

	useEffect(()=>{
		if(localEntry?.i !== -1 && localEntry?.i !== undefined) {
			onEditEntry(localEntry?.i)
		}
	},[localEntry?.i])

	useEffect(()=>{
		const token = localStorage.getItem('token')
		if(token) {
			const decodedToken = jwtDecode<any>(token)
			if(decodedToken.email) setEmailFromToken(decodedToken.email)			
		}
	
	},[])

	useEffect(()=>{
		if (emailFromToken) {
			fetch(`https://dev-labs-microservices-todo-crud.vercel.app/api/todos?email=${emailFromToken}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
			})
				.then((res)=>res.json())
				.then((data)=>{
					if (data.tasks.length===0) return
					const tasks = data.tasks.map((t:any, i:number)=>{
						return {
							entryText: t.title, 
							isEditButtonActive: false,
							_id: data.tasks[i]._id
						}
					})
					setShouldAnimateEntries(false)
					setTodoEntriesList(tasks)
				})
				.catch((err)=>console.log(err))
		}

	},[emailFromToken])

	return (
		<>
			{localEntry &&
				<TodoContext.Provider 
					value = {{
						onSubmitFormTodoEntry,
						onDeleteEntry,
						onEditEntry,

						todoEntriesList,
						localEntry,
						setLocalEntry,
						shouldAnimateEntries,
						setShouldAnimateEntries
				}}
				>
					<TodoListComponent />
				</TodoContext.Provider>
			}
		</>
	);
}
