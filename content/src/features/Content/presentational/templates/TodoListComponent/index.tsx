import React, { Context } from 'react';
import { Form } from '../../../../Resources/index';
import { EntryType, TodoContextType } from '../../../types';
import AddEntrySection from '../../molecules/AddEntrySection';
import EntryRow from '../../organisms/EntryRow';
import { EntryRowContext, TodoContext } from '../../../contexts';
import { useCustomContext } from '../../../hooks/useCustomContext';
import { motion } from 'framer-motion';
import { entriesVariant } from '../variants/entries.variant';
import Spinner from '../../../../Resources/Spinner';

export default function TodoListComponent() {
  const {
    onSubmitFormTodoEntry,
    todoEntriesList,
    shouldAnimateEntries,
    setShouldAnimateEntries,
  } = useCustomContext(TodoContext as Context<TodoContextType>);

  return (
    <>
		{todoEntriesList.length > 0 ? (
			<motion.section
				className="w-[75%] sm:w-[50vw] h-auto d-flex content-start justify-items-center m-auto"
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: {
					duration: 0.7,
					},
				}}
				exit={{
					opacity: 0,
					transition: {
					duration: 0.7,
					},
				}}
			>
			<p className="text-center mb-5 text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl">
				ToDo
			</p>
			<Form id="todoForm" handleSubmit={onSubmitFormTodoEntry}>
				<AddEntrySection />
			</Form>

			<ul className="flex flex-col gap-2 w-[-webkit-fill-available] mt-2 overflow-visible">
				{todoEntriesList?.map((entry: EntryType, i: number, array) => (
					<motion.li
						className="flex justify-center gap-2 border-t-2 w-full"
						key={entry.entryText + Math.floor(Math.random() * 100).toString()}
						variants={entriesVariant}
						initial={
						shouldAnimateEntries
							? i === array.length - 1
							? 'initial'
							: 'animate'
							: {}
						}
						animate={
						shouldAnimateEntries
							? i === array.length - 1
							? 'animate'
							: {}
							: {}
						}
						onAnimationComplete={() => setShouldAnimateEntries(false)}
					>
						<EntryRowContext.Provider value={{ i, entry }}>
							<EntryRow />
						</EntryRowContext.Provider>
					</motion.li>
				))}
			</ul>
			</motion.section>
		) 
		: (<Spinner loadingText="Loading ToDo List..." />)
		}
    </>
  );
}
