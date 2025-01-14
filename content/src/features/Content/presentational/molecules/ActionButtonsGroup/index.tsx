import React, { Context } from "react";
import { Button } from "../../../../Resources/index";
import { EntryRowContextType, TodoContextType } from "../../../types";
import { useCustomContext } from "../../../hooks/useCustomContext";
import { EntryRowContext, TodoContext } from "../../../contexts";

export default function ActionButtonsGroup() {
	const { localEntry, setLocalEntry, onDeleteEntry, onEditEntry } =
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
							//cambiarvalor de isEditButtonActive a TRUE
							//copiar valor de entry en update

							//* mientras escribimos el update se modificara solo

							//cuando apretemos de nuevo en este boton tiene que cambiar isEditButtonActive a FALSE
							//y copiar el update en entry, previamente VALIDANDOLO

							setLocalEntry({
								...localEntry,
								updatedText:
									localEntry.updatedText === ""
										? entry.entryText
										: localEntry.updatedText,
								i: i,
							});

							//const inputElement = ev.target.parentNode.parentNode.firstChild;
							//onEditEntry(i)
						}}
					/>
				</div>
			)}
		</>
	);
}
