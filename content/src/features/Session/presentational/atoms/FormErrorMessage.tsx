import React from 'react'

export default function FormErrorMessage({ error }: {error: string}) {    

    return (
        <strong className="text-red-500 text-center h-[1rem]">{error}</strong>
    )
}
