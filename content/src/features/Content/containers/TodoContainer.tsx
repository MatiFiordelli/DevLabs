import React, { FormEvent, useState } from "react";
import TodoListComponent from "../presentational/templates/todoListComponent";
import { EntryType } from "../types";
import { TodoContext } from "../contexts";

export default function TodoContainer() {
	const [entriesData, setEntriesData] = useState<EntryType[]>([]);
	const [localEntry, setLocalEntry] = useState<EntryType | null>({
		item: "",
		i: -1,
	});

	const checkIfEntryIsIncluded = (item: string) => {
		return entriesData.some((entry)=>entry.item===item)
	}

	const onSubmitFormTodoItem = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const item = formData.get("item");

		if(!checkIfEntryIsIncluded(item as string)){
			if (entriesData && item) {
				setEntriesData([
					...entriesData,
					{ item: item as string, isEditButtonActive: false },
				]);
			}
			e.currentTarget.reset();
		} else {
			alert("Try to enter a different item");
		}
	};

	const onDeleteItem = (i: number) => {
		if (entriesData) {
			setEntriesData(entriesData?.filter((_, index) => index !== i));
		}
	};

	const validateInput = (inputElement?: HTMLInputElement): boolean => { 
		// !! that sign converts to boolean
		return !!(inputElement && inputElement.value !== "" && inputElement.value.length > 2); 
	};

	const onEditItem = (i: number, inputElement?: HTMLInputElement) => {
		const updatedState = entriesData.map((entry, index) => {
			if (index === i) {
				const condition = validateInput(inputElement)

				if(!condition) alert('The item was not saved. It needs to be longer than 2 characters')

				return {
					...entry,
					isEditButtonActive: !entry.isEditButtonActive,
					item: condition ? inputElement?.value as string : entry.item,
				};
			}
			return { ...entry, isEditButtonActive: false };
		});

		setEntriesData(updatedState);
	};

	//en session, hay que ver los types propios, y atomizar
	
	return (
		<>
			{localEntry &&
				<TodoContext.Provider 
					value = {{
						onSubmitFormTodoItem,
						entriesData,
						onDeleteItem,
						onEditItem,
						localEntry,
						setLocalEntry			
				}}
				>
					<TodoListComponent />
				</TodoContext.Provider>
			}
		</>
	);
}
