import React from "react";
import { PropsHamburgerButton } from "../../../../../models/interfaces/MobileNav.ts";
import styles from "./index.module.css";

export default function NavList({
	isActiveHamburgerButton,
	setIsActiveHamburgerButton,
}: PropsHamburgerButton) {

	const handleClickCloseNavList = () => {
		setIsActiveHamburgerButton(!isActiveHamburgerButton)
	}

	return (
		<section
			className={`${styles["nav-list-container"]} ${
				isActiveHamburgerButton
					? styles["nav-container-effect-active"]
					: styles["nav-container-effect-inactive"]
			}`}
			onClick={handleClickCloseNavList}
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
					<li data-text="LOGIN">LOGIN</li>
				</ul>
			</nav>
		</section>
	);
}
