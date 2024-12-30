import React, { ChangeEvent, Context } from "react";
import { Input } from "../../../Resources/index";
import ActionButtonsGroup from "../molecules/ActionButtonsGroup";
import type { EntryRowType, TodoContextType } from "../../types";
import { EntryRowContext, TodoContext } from "../../contexts";
import { useCustomContext } from "../../hooks/useCustomContext";

export default function EntryRow() {
	const {
		localEntry,
		setLocalEntry,
	} = useCustomContext(TodoContext as Context<TodoContextType>);

	const {
		i,
		entry
	} = useCustomContext(EntryRowContext as Context<EntryRowType>);

	return (
		<>
			{localEntry && (
				<>
					<Input
						autoFocus={entry.isEditButtonActive ? true : false}
						id={
							entry.item +
							Math.floor(Math.random() * 100).toString()
						}
						value={
							entry.isEditButtonActive
								? localEntry.item
								: entry.item
						}
						classNames="p-3 max-w-[75%] border-0 outline-none bg-transparent"
						placeholder={"You need to enter an item"}
						title={"Item"}
						type={"text"}
						isReadOnly={!entry.isEditButtonActive}
						onChangeHandler={
							entry.isEditButtonActive
								? (e: ChangeEvent<HTMLInputElement>) =>
										setLocalEntry({
											item: e.currentTarget.value,
											i: i,
										})
								: () => {}
						}
						isRequired={true}
						maxLength={50}
						pattern="^[A-Za-z0-9 .,!?]{1,30}$"
					/>

					<ActionButtonsGroup/>
				</>
			)}
		</>
	);
}				