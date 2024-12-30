import { Dispatch, FormEvent, SetStateAction } from "react";

export interface EntryType {
	item: string;
	isEditButtonActive?: boolean;
	i?: number;
	inputElement?: HTMLInputElement;
}

export interface EntryRowType {
	i: number;
	entry: EntryType;
}

export interface TodoContextType {
	onSubmitFormTodoItem: (e: FormEvent<HTMLFormElement>) => void;
	entriesData: EntryType[];
	onDeleteItem: (i: number) => void;
	onEditItem: (i: number, inputElement?: HTMLInputElement) => void;
	localEntry: EntryType;
	setLocalEntry: Dispatch<SetStateAction<EntryType | null>>;
}
