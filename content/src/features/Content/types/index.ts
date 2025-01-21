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
	emailFromToken: string | null;
	todoEntriesList: EntryType[] | null;
	setTodoEntriesList: Dispatch<SetStateAction<EntryType[] | null>>;
	localEntry: EntryType;
	setLocalEntry: Dispatch<SetStateAction<EntryType | null>>;
	shouldAnimateEntries: boolean;
	setShouldAnimateEntries: Dispatch<SetStateAction<boolean>>;
	isAddingNewRemoteEntry: boolean;
	setIsAddingNewRemoteEntry: Dispatch<SetStateAction<boolean>>;
}
