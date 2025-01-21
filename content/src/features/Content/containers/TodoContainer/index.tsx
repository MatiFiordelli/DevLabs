import React, { useEffect, useState } from "react";
import TodoListComponent from "../../presentational/templates/TodoListComponent";
import { EntryType } from "../../types";
import { TodoContext } from "../../contexts";
import { jwtDecode } from "jwt-decode";
import { getAllEntries, onEditEntry } from "../../helpers/crudFunctions";

export default function TodoContainer() {
	const [todoEntriesList, setTodoEntriesList] = useState<EntryType[] | null>(null);
	const [localEntry, setLocalEntry] = useState<EntryType | null>({
		entryText: "",
		updatedText: "",
		i: -1,
	});
	const [isAddingNewRemoteEntry, setIsAddingNewRemoteEntry] = useState(false);
	const [shouldAnimateEntries, setShouldAnimateEntries] = useState(true);
	const [emailFromToken, setEmailFromToken] = useState(null)

	useEffect(()=>{
		if(localEntry?.i !== -1 && localEntry?.i !== undefined) {
			onEditEntry(
				localEntry?.i,
				todoEntriesList,
				localEntry,
				emailFromToken,
				setTodoEntriesList,
				setLocalEntry,
			)
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
		getAllEntries(
			emailFromToken,
			setTodoEntriesList,
			setShouldAnimateEntries
		)

	},[emailFromToken])

	return (
		<>
			{localEntry &&
				<TodoContext.Provider 
					value = {{
						emailFromToken,
						todoEntriesList,
						setTodoEntriesList,
						localEntry,
						setLocalEntry,
						shouldAnimateEntries,
						setShouldAnimateEntries,
						isAddingNewRemoteEntry,
						setIsAddingNewRemoteEntry
				}}
				>
					<TodoListComponent />
				</TodoContext.Provider>
			}
		</>
	);
}
