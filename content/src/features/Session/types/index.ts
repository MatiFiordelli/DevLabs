export interface SessionProps {
	handleSigninSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
	error: string
}

export interface EntriesDataType {
	email: string,
	password: string
}