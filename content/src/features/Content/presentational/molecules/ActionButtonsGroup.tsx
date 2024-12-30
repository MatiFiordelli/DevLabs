import React, { Context } from "react";
import { Button } from "../../../Resources/index";
import { EntryRowType, TodoContextType } from "../../types";
import { useCustomContext } from "../../hooks/useCustomContext";
import { EntryRowContext, TodoContext } from "../../contexts";

export default function ActionButtonsGroup() {
	const {
		localEntry,
		setLocalEntry,
		onDeleteItem,
		onEditItem,
	} = useCustomContext(TodoContext as Context<TodoContextType>);

	const {
		i,
		entry
	} = useCustomContext(EntryRowContext as Context<EntryRowType>);

	
	return (
		<>
			{localEntry &&
				<div className="flex items-center justify-end gap-2">
					<Button
						type="submit"
						text={"❌"}
						title={"Delete item"}
						textColor="#FFF"
						textSize="small"
						bgColor="#e1a3a3"
						buttonWidth="2.5rem"
						buttonHeight="2.5rem"
						onClickHandler={() => onDeleteItem(i)}
					/>
					<Button
						type="submit"
						text={entry.isEditButtonActive ? "✔️" : "✏️"}
						title={"Edit item"}
						textColor="#FFF"
						textSize="small"
						bgColor="#71d87f"
						buttonWidth="2.5rem"
						buttonHeight="2.5rem"
						onClickHandler={(e) => {
							//poner esto en onEditItem despues!
							setLocalEntry({item: entry.item, i:i, inputElement: e.target.parentNode.parentNode.firstChild});
							const inputElement = e.target.parentNode.parentNode.firstChild;
							onEditItem(i, inputElement);
						}}
					/>
				</div>
			}
		</>
	);
}
