import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoContainer from '../src/features/Content/containers/TodoContainer/index.tsx'



describe('Task creation', () => {
    beforeEach(() => { render(<TodoContainer />); });

    it('should render the form correctly', () => { 
        expect(screen.getByTestId('todoForm')).toBeInTheDocument(); 
    });

    it('should have the required fields', () => {
        expect(screen.getByTestId('inputEntry')).toBeInTheDocument();
        expect(screen.getByTestId('addButton')).toBeInTheDocument();
    })
})