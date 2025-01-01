import React, { useEffect, useState } from "react";
import { PropsHamburgerButton } from "../../../../../models/interfaces/MobileNav.ts";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export default function NavList({
	isActiveHamburgerButton,
	setIsActiveHamburgerButton,
}: PropsHamburgerButton) {

	const [pathRoutes, setpathRoutes] = useState(null)
	const navigate = useNavigate()
	
	useEffect(()=>{
		import('host/pathRoutes').then((module) => {
			setpathRoutes(module.pathRoutes)
		})
	},[])

	const handleClickCloseNavList = (route: string) => {
		setIsActiveHamburgerButton(!isActiveHamburgerButton)

		if(route!=="") navigate(route)
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
					{pathRoutes && Object.values(pathRoutes).map((e, i) => {
						const route = e as {name:string, path: string}

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
				</ul>
			</nav>
		</section>
	);
}
