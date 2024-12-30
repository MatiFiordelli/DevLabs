import React, { FormEvent, useState } from 'react'
import SessionComponent from '../presentational/organisms/SessionComponent'
import { EntriesDataType } from '../types';

export default function SessionContainer() {
    const [entriesData, setEntriesData] = useState<EntriesDataType>({
            email: "",
            password: "",
        });
        const [error/* , setError */] = useState('')
    
        const handleSigninSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
    
            const formData = new FormData(e.currentTarget);
            const entries = Object.fromEntries(formData.entries());
    
            /* // Email validation
            const emailPattern = /[a-z0-9._%+]+@[a-z0-9.]+.[a-z]{2,4}$/;
            if (!emailPattern.test(entries.email as string)) {
                setError("Invalid Email");
                return;
            }
    
            // Password validation
            const passwordPattern =
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*\-]).{8,12}$/;
            if (!passwordPattern.test(entries.password as string)) {
                setError("Invalid Password");
                return;
            }
            console.log(entries.password as string)
            setEntriesData(entries); */
        };
    
    return (
        <SessionComponent
            handleSigninSubmit={handleSigninSubmit}
            error={error}
        />
    )
}
