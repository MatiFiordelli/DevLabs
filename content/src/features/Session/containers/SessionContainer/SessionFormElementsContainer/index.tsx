import React, { useEffect, useState } from 'react'
import SessionFormElements from '../../../presentational/molecules/SessionFormElements';
import { useDispatch, useSelector } from 'react-redux';
import { EntriesDataType } from '../../../types';
import { setFormError } from '../../../redux/actions';

export default function SessionFormElementsContainer({ isLogin }: { isLogin: boolean }) {
    
    const formData = useSelector((state: {setFormDataReducer: EntriesDataType})=>state.setFormDataReducer)
    const errorMessage = useSelector((state: { setFormErrorReducer: { errorMessage: string; }})=>state.setFormErrorReducer.errorMessage)
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false);

    const dispatch = useDispatch()

    const verifyPasswordEquality = (password: string, repeatPassword: string) => {
        if (repeatPassword && password && repeatPassword !== password) {
            const message = "Passwords do not match"

            if (errorMessage !== message)
                dispatch(setFormError({errorMessage: message}))
        } else {
            dispatch(setFormError({errorMessage: ''}))
        }
    }

    const validateForm = (email: string, password: string, repeatPassword: string) => { 
        return email !== "" && password !== "" && repeatPassword !== "" && password === repeatPassword; 
    };

    useEffect(()=>{
        verifyPasswordEquality(repeatPassword, formData?.password)		
        setIsSubmitButtonEnabled(
            validateForm(formData?.email, formData?.password, repeatPassword)
        );

    },[repeatPassword, formData?.email, formData?.password])

    return (
        <SessionFormElements 
            dispatch = {dispatch}
            formData = {formData}
            isLogin = {isLogin}
            repeatPassword = {repeatPassword}
            setRepeatPassword = {setRepeatPassword}
            isSubmitButtonEnabled = {isSubmitButtonEnabled}
        />
    )
}
