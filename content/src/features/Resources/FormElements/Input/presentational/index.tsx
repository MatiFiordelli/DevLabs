import React from "react";
import { InputType } from "../types";

export default function Input({
	type,
	id,
	placeholder,
	title,
	isRequired = false,
	autoFocus = false,
	value = "",
	onChangeHandler = "",
	onKeyDownHandler = "",
	minLength = 3,
	maxLength = 50,
	pattern = "",
	inputRef= null,
	isReadOnly= false,
	classNames= ""
}: InputType) {

	return (
		<>
			{id && (
				<input
					ref={inputRef}
					className={`border border-slate-400 p-3 sm:w-[inherit] rounded-full mb-0 w-[inherit] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-4xl ${classNames}`}
					type={type}
					id={id}
					name={id}
					placeholder={placeholder}
					readOnly={isReadOnly}
					required={isRequired}
					minLength={minLength}
					maxLength={maxLength}
					/* min={type === "date" ? "1900/01/01" : ""}
				max={type === "date" ? "2024/05/01" : ""} */
					pattern={pattern}
					title={title}
					aria-label="Input field"
					aria-describedby={title}
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck="false"
					autoFocus={autoFocus}
					onChange={typeof onChangeHandler === "function" ? (e) => onChangeHandler(e) : ()=>{} }
					onKeyDown={typeof onKeyDownHandler === "function" ? (e) => onKeyDownHandler(e) : ()=>{} }
					value={value || ""}
				/>
			)}
		</>
	);
}
