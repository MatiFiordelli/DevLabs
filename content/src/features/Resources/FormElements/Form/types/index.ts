export interface FormType {
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	children: React.ReactNode;
	id?: string;
}
