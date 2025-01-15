import React, { FormEvent, useEffect, useState } from "react";
import SessionComponent from "../../presentational/organisms/SessionComponent";
import localStore from "../../redux/store";
import { Provider } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { urls } from "../../utils/urls";
import { authService } from "../../services/authService";
import { EntriesDataType } from "../../types";
import { useDispatch } from "react-redux";
import { setFormError } from "../../redux/actions";

function MakeDispatchInsideProvider({
	message,
	setAuthError,
}: {
	message: string;
	setAuthError: React.Dispatch<React.SetStateAction<string>>;
}) {
	const dispatch = useDispatch();
	useEffect(() => {
		message && dispatch(setFormError({ errorMessage: message }));
        setAuthError('')
	}, [message]);

	return <></>;
}

export default function SessionContainer() {
	const { pathname } = useLocation()
	const [isLogIn, setIsLogIn] = useState(true);
	const [authError, setAuthError] = useState("");
	const navigate = useNavigate();

	const handleSigninSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const entries = Object.fromEntries(
			formData.entries()
		) as unknown as EntriesDataType;

		authService(entries, isLogIn ? urls.login : urls.signup)
			.then((data) => {
				if (data === "OK"){ 
					window.dispatchEvent(new CustomEvent(
						'isLoggedInDetection', { 
							detail: {
								isLoggedIn: true
							} 
						}
					))
					setTimeout(() => {
						navigate("/");
					}, 300);
				}
			})
			.catch((error) => {
				setAuthError(error.message);
			});
	};

	useEffect(()=>{
		//here we need to use the pathRoutes, remote resource, creating a Promise to await availability
		//or await for the resource and then set the state
		if (pathname==='/login') setIsLogIn(true)
		if (pathname==='/signup') setIsLogIn(false)

	},[])

	return (
		<Provider store={localStore}>
			<MakeDispatchInsideProvider
				message={authError}
				setAuthError={setAuthError}
			/>
			<SessionComponent
				handleSigninSubmit={handleSigninSubmit}
				isLogIn={isLogIn}
			/>
		</Provider>
	);
}