export interface ButtonType {
	id?: string;
	type?: "button" | "submit" | "reset";
	text?: string | null;
	textColor?: string;
	textSize?: "small" | "normal" | "large";
	bgColor?: string;
	classNames?: string;
	title?: string;
	isDisabled?: boolean;
	onClickHandler?: (...args: any[]) => void;
	buttonWidth?: string;
	buttonHeight?: string;
}