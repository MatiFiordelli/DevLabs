import React, { Context } from "react";
import { Form }from "../../../Resources/index";
import { EntryType, TodoContextType } from "../../types";
import ItemEntry from "../molecules/ItemEntry";
import EntryRow from "../organisms/EntryRow";
import { EntryRowContext, TodoContext } from "../../contexts";
import { useCustomContext } from "../../hooks/useCustomContext";

export default function TodoListComponent() {
	const {
		onSubmitFormTodoItem,
		entriesData,
	} = useCustomContext(TodoContext as Context<TodoContextType>);

	return (
		<section className="w-[75%] sm:w-[50vw] h-screen d-flex content-start justify-items-center m-auto">
			<p className="text-center mb-5 text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl">ToDo</p>
			<Form handleSubmit={onSubmitFormTodoItem}>
				<ItemEntry />
			</Form>

			<ul className="flex flex-col gap-2 w-[-webkit-fill-available] mt-2 overflow-hidden">
				{entriesData?.map((entry: EntryType, i: number) => (
					<li
						className="flex justify-center gap-2 border-t-2 w-full"
						key={entry.item + Math.floor(Math.random() * 100).toString()}
					>
						<EntryRowContext.Provider value = {{i, entry}}>
							<EntryRow />
						</EntryRowContext.Provider>
					</li>
				))}
			</ul>
		</section>
	);
}
