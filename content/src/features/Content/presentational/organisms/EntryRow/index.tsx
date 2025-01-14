import React, { ChangeEvent, Context } from "react";
import { Input } from "../../../../Resources/index";
import ActionButtonsGroup from "../../molecules/ActionButtonsGroup";
import type { EntryRowContextType, TodoContextType } from "../../../types";
import { EntryRowContext, TodoContext } from "../../../contexts";
import { useCustomContext } from "../../../hooks/useCustomContext";

export default function EntryRow() {
	const {
		localEntry,
		setLocalEntry,
	} = useCustomContext(TodoContext as Context<TodoContextType>);

	const {
		entry
	} = useCustomContext(EntryRowContext as Context<EntryRowContextType>);

	return (
		<>
			{localEntry && (
				<>
					<Input
						autoFocus={entry.isEditButtonActive ? true : false}
						id={
							entry.entryText +
							Math.floor(Math.random() * 100).toString()
						}
						value={
							entry.isEditButtonActive
								? localEntry.updatedText
								: entry.entryText
						}
						classNames="p-3 max-w-[75%] border-0 outline-none bg-transparent"
						placeholder={"You need to enter an entry"}
						title={"Entry input"}
						type={"text"}
						isReadOnly={!entry.isEditButtonActive}
						onChangeHandler={
							entry.isEditButtonActive
								? (e: ChangeEvent<HTMLInputElement>) =>
										setLocalEntry({
											...localEntry,
											updatedText: e.currentTarget.value,
											/* i: i, */
										})
								: () => {}
						}
						isRequired={true}
						maxLength={50}
						minLength={3}
						pattern="^[A-Za-z0-9 .,'!?áéíóúÁÉÍÓÚ]{3,50}$"
					/>

					<ActionButtonsGroup/>
				</>
			)}
		</>
	);
}				