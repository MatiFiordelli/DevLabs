export interface FormType {
	handleSubmit: (event: React.FormEvent<HTMLFormElement>, paramsForFunctionHandler?: any) => void;
	children: React.ReactNode;
	id?: string;
	paramsForFunctionHandler?: any
}
