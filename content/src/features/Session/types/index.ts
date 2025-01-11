import { FormEvent } from "react";
import { Dispatch } from "redux";

export interface SessionProps {
	handleSigninSubmit: (e: FormEvent<HTMLFormElement>) => void,
	isLogIn: boolean	
}

export interface EntriesDataType {
	email: string,
	password: string
}

export interface SessionFormElementsProps {
	dispatch: Dispatch<{ type: string; payload: EntriesDataType; }>;
	formData: EntriesDataType | undefined;
	isLogin: boolean;
	repeatPassword: string;
	setRepeatPassword: (value: string) => void;
	isSubmitButtonEnabled: boolean;
}