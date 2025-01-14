import React, { FormEvent, useEffect, useState } from "react";
import SessionComponent from "../../presentational/organisms/SessionComponent";
/* import { EntriesDataType } from '../../types'; */
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
/*
CASOS POSIBLES:
-esta deslogeado, aparece signup/login, rutas disponibles, Ambas. El Home es el Login
    -te logueas
    -te registras

-esta logueado, aparece logout, rutas disponibles, Ninguna. El Home es TODO APP
*/

/*------------------------------------------------------------------------------------------- !!!!!
tiene q haber en el redux del host 2 estados generales compartidos:
1-) isLogin: el cual se define en el useEffect del componente LogIn o SignUp.
             sirve para la UI, asi define layout y urls para el handler del form submit

2-) isLoggedIn: el cual se define en el momento que el login/signup es exitoso (en ese fetch se recibe el token q esta en localstorage).
                sirve para el Nav del Layout, mostrando o Login o Logout.
                sirve para el host, para definir que rutas estaran o no autorizadas de usar.


Extra: 
1-) en el backend, al loguearse o al registrarse, aparte del token, debe enviar el email(a modo nombre de Usuario, se puede cortar la parte anterior a la arroba)
2-) aplicar react-query para verificar cada ciertor "momentos" si el token sigue siendo valido
3-) cada vez que se entre a algo q requiera autorizacion, se debe verificar con el custom hook de tokenVerification..
*/
