import React, { Context, useContext } from "react";
import { Input } from "../../../../Resources/index";
import { Button } from "../../../../Resources/index";
import useMic from "../../../../../hooks/useMic";
import { TodoContext } from "../../../contexts";
import { TodoContextType } from "../../../types";

export default function AddEntrySection() {
	const { 
		localEntry, 
		setLocalEntry, 
		setShouldAnimateEntries 
	} = useContext(TodoContext as Context<TodoContextType>);

	const {
		isMicActive,
		toggleMicHandler,
		clickAddButtonHandler,
	} = useMic(localEntry, setLocalEntry);

	return (
		<div className="flex justify-center m-auto items-center gap-2 w-auto">
			<Input
				id={"inputEntry"}
				type={"text"}
				placeholder={"Enter your ToDo entry"}
				title={"Todo entry"}
				isRequired={true}
				autoFocus={true}
				maxLength={50}
				minLength={3}
				pattern="^[A-Za-z0-9 .',!?áéíóúÁÉÍÓÚ]{3,50}$"
				isReadOnly={isMicActive}
				value={localEntry.entryText}
				onChangeHandler={(e) => {
					setShouldAnimateEntries(false);
					setLocalEntry({
						...localEntry,
						entryText: e.target.value.trim(),
					});
				}}
			/>
			<Button
				id={"micInputEntry"}
				type="button"
				text={"🎤"}
				title={"Speech to Text"}
				textColor="#FFF"
				textSize="small"
				bgColor={`${isMicActive ? " #16bd21 " : "#878cf5"}`}
				buttonWidth="2.5rem"
				buttonHeight="2.5rem"
				onClickHandler={toggleMicHandler}
			/>
			<Button
				type="submit"
				id={"addButton"}
				text={"➕"}
				title={"Add button"}
				textColor="#FFF"
				textSize="small"
				bgColor="#878cf5"
				buttonWidth="2.5rem"
				buttonHeight="2.5rem"
				onClickHandler={clickAddButtonHandler}
			/>
		</div>
	);
}
