import React, { useContext, useEffect, useState } from "react";
import { PropsHamburgerButton } from "../../../../../models/interfaces/MobileNav.ts";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { IsLoggedInContext } from "../../../../../contexts/index.ts";

export default function NavList({
	isActiveHamburgerButton,
	setIsActiveHamburgerButton,
}: PropsHamburgerButton) {
	//place a Spinner while pathRoutes is not available!

	const [filteredPathRoutes, setFilteredPathRoutes] = useState(null)
	const navigate = useNavigate()
	const { isLoggedIn } = useContext(IsLoggedInContext) as {isLoggedIn: boolean};

	useEffect(()=>{
		import('host/pathRoutes').then((module) => {
			const filteredRoutes = Object.values(module.pathRoutes).filter((e: any) => e.isLogInRequired === isLoggedIn)
			setFilteredPathRoutes(filteredRoutes as any)
		})

	},[isLoggedIn])
	
	const handleClickCloseNavList = (route: string) => {
		setIsActiveHamburgerButton(!isActiveHamburgerButton)

		if(route!=="") navigate(route)
	}

	const logOut = () => {
		localStorage.removeItem('token')

		window.dispatchEvent(new CustomEvent(
			'isLoggedInDetection', { 
				detail: {
					isLoggedIn: false
				} 
			}
		))
		
		setIsActiveHamburgerButton(false)

	}
	
	return (
		<section
			className={`${styles["nav-list-container"]} ${
				isActiveHamburgerButton
					? styles["nav-container-effect-active"]
					: styles["nav-container-effect-inactive"]
			}`}
			onClick={() => handleClickCloseNavList("")}
		>
			<nav
				className={`${styles["nav-list"]} ${
					isActiveHamburgerButton
						? styles["nav-list-width-active"]
						: styles["nav-list-width-inactive"]
				}`}
				onClick={(e) => e.stopPropagation()}
			>
				<ul className={styles["nav-list__ul"]}>
					{filteredPathRoutes && Object.values(filteredPathRoutes).map((e, i) => {
						const route = e as {name:string, path: string, isLogInRequired: boolean}

						return (
							<li 
								key={route.name + i} 
								data-text={route.name} 
								aria-label={route.name}
								role="link"
								tabIndex={0}
								onClick={() => handleClickCloseNavList((route.path))}
							>
								{route.name}
							</li>
						)}
					)}
					{isLoggedIn && 
						(<li 
							key={'routeLogout'} 
							data-text={'LOGOUT'} 
							aria-label={'Logout'}
							role="link"
							tabIndex={0}
							onClick={logOut}
						>
							LOGOUT
						</li>)
					}
				</ul>
			</nav>
		</section>
	);
}

/*
Pasos a seguir con el Custom Event:
poner un Custom Event en el host en useEffect [], con el isLoggedIn, hacer un control ahi
si hay token, validarlo, en base a eso o a la falta de token, definir esa propiedad como true o false
eso es INICIAL.

despues, 
cada componente/microfrontend debe tener su estado global o context con el estado isLoggedIn
cada componente/microfrontend debe tener su addEventListener para detectar si cambio la propiedad del
	CustomEvent, en su componente principal en el useEffect [] con un removeEventListener en su cleanup function




	((()))
hay dos opciones para la propiedad isLoggedIn.. una es dispatchEvent con true para cuando:
	-se hace un login exitoso,
	-se hace un signup exitoso,
	-una verificacion de token exitosa (react-query)
	((()))

luego el estado global de cada servira para autorizar:
	-en el host, para habilitar rutas, True mostrara solo TODO APP, False mostrara solo LOGIN/SIGNUP (ver el home, debe redireccionar a login si es False)
	-en el layout, para la NavBar, True mostrara Home y Logout, False mostrara Login/Signup
	-en el content, en teoria esta cubierto por las rutas, no se necesitaria hacer el control.

al apretar F5 o al entrar a la APP, verificar token y si esta logueado, y setear isLoggedIn..
*/