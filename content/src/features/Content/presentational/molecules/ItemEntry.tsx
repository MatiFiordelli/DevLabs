import React from "react";
import { Input } from "../../../Resources/index";
import { Button } from "../../../Resources/index";

export default function ItemEntry() {
	return (
		<div className="flex justify-center m-auto items-center gap-2 w-[80%]">
			<Input
				id={"item"}
				type={"text"}
				placeholder={"Enter your ToDo item"}
				title={"Item"}
				isRequired={true}
				autoFocus={true}
				maxLength={50}
				pattern="^[A-Za-z0-9 .,!?]{1,30}$"
			/>
			<Button
				type="submit"
				text={"➕"}
				title={"Add button"}
				textColor="#FFF"
				textSize="small"
				bgColor="#878cf5"
				buttonWidth="2.5rem"
				buttonHeight="2.5rem"
			/>
		</div>
	);
}
