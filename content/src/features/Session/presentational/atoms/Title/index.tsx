import React from 'react'

export default function Title({ isLogIn }: { isLogIn: boolean }) {    

    return (
        <p className="text-center mb-5 text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl">
            {!isLogIn 
                ? "SIGNUP" 
                : "LOGIN"
            }
        </p>
    )
}
