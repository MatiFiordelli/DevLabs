import React from "react";
import { PropsHamburgerButton } from "../../../../../models/interfaces/MobileNav.ts";
import styles from "./index.module.css";

export default function HamburgerButton({ isActiveHamburgerButton, setIsActiveHamburgerButton }: PropsHamburgerButton) {
   
    const handleClick = () => {
        setIsActiveHamburgerButton(!isActiveHamburgerButton)
    }

	return (
		<section 
            className={`${styles['hamburger-button']} ${isActiveHamburgerButton ? styles['hamburger-button--active'] : ''}`}
            onClick={()=>handleClick()}
        >
            <div className={styles.lineTop} />
            <div className={styles.lineMiddle} />
            <div className={styles.lineBottom} />
        </section>
	);
}
