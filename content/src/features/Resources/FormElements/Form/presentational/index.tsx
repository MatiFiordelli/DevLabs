import React from "react";
import { FormType } from "../types";

export default function Form({ handleSubmit, children, id = "" }: FormType) {
	return (
		<form
			data-testid={id}
			id={id === "" ? String("Form" + Math.random()) : id}
			className="flex flex-col gap-5 justify-items-start w-full"
			onSubmit={(e) => handleSubmit(e)}
		>
			{children}
		</form>
	);
}
