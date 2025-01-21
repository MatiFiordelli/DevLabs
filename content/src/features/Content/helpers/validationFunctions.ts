import { EntryType } from "../types";

export const isItARepeatedEntry = (
  entry: string,
  todoEntriesList: EntryType[] | null,
) => {
  return todoEntriesList?.some((e) => e.entryText === entry);
};

export const isValidLength = (entry: string = '') => {
  return entry.length >= 3 && entry.length <= 50;
};
