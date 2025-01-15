import React, { Context } from "react";
import { Button } from "../../../../Resources/index";
import { EntryRowContextType, TodoContextType } from "../../../types";
import { useCustomContext } from "../../../hooks/useCustomContext";
import { EntryRowContext, TodoContext } from "../../../contexts";

export default function ActionButtonsGroup() {
	const { localEntry, setLocalEntry, onDeleteEntry } =
		useCustomContext(TodoContext as Context<TodoContextType>);

	const { entry, i } = useCustomContext(
		EntryRowContext as Context<EntryRowContextType>
	);

	return (
		<>
			{localEntry && (
				<div className="flex items-center justify-end gap-2">
					<Button
						type="submit"
						text={"❌"}
						title={"Delete entry"}
						textColor="#FFF"
						textSize="small"
						bgColor="#e1a3a3"
						buttonWidth="2.5rem"
						buttonHeight="2.5rem"
						onClickHandler={() => onDeleteEntry(i)}
					/>
					<Button
						type="button"
						text={entry.isEditButtonActive ? "✔️" : "✏️"}
						title={"Edit entry"}
						textColor="#FFF"
						textSize="small"
						bgColor="#71d87f"
						buttonWidth="2.5rem"
						buttonHeight="2.5rem"
						onClickHandler={() => {

							setLocalEntry({
								...localEntry,
								updatedText:
									localEntry.updatedText === ""
										? entry.entryText
										: localEntry.updatedText,
								i: i,
							});
						}}
					/>
				</div>
			)}
		</>
	);
}
