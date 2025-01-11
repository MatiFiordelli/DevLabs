import React from 'react'

export default function FormErrorMessage({ errorMessage }: {errorMessage: string}) {
    
    return (
        <strong className="text-red-500 text-center h-[1rem]">{errorMessage}</strong>
    )
}
