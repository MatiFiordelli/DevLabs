export interface InputType {
	type?: string;
	id?: string;
	placeholder?: string;
	title?: string;
	isRequired?: boolean;
	autoFocus?: boolean;
	value?: string;
	onChangeHandler?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | string;
	onKeyDownHandler?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | string;
	isChecked?: boolean | null;
	minLength?: number;
	maxLength?: number;
	pattern?: string;
	inputRef?: React.RefObject<HTMLInputElement> | null;
	isReadOnly?: boolean;
	classNames?: string;
}