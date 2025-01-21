import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TodoContext } from '../src/features/Content/contexts/index.ts'
import TodoListComponent from '../src/features/Content/presentational/templates/TodoListComponent/index.tsx'

const mockContextValues = {
    emailFromToken: "test@gmail.com",
    todoEntriesList: [],
    setTodoEntriesList: jest.fn(),
    localEntry: {entryText: ''},
    setLocalEntry: jest.fn(),
    shouldAnimateEntries: false,
    setShouldAnimateEntries: jest.fn(),
    isAddingNewRemoteEntry: false,
    setIsAddingNewRemoteEntry: jest.fn()
}

describe('Task creation', () => {
    beforeEach(() => { 
        render(
            <TodoContext.Provider value={mockContextValues}>
                <TodoListComponent />
            </TodoContext.Provider>
        ); 
    });

    it('should render the form correctly', async () => { 
        await waitFor(()=>{
            expect(screen.getByTestId('todoForm')).toBeInTheDocument(); 
        })
    });

    it('should have the required fields', async () => {
        await waitFor(()=>{
            expect(screen.getByTestId('inputEntry')).toBeInTheDocument();
            expect(screen.getByTestId('addButton')).toBeInTheDocument();
        })
    })
})