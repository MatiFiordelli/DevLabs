import React, { useState } from 'react'
import HamburgerButton from './HamburgerButton'
import NavList from './NavList'
import styles from './index.module.css'

export default function MobileNav() {
    const [isActiveHamburgerButton, setIsActiveHamburgerButton] = useState<boolean>(false)

    return (
        <header className={styles['mobile-nav']}>
            <HamburgerButton 
                isActiveHamburgerButton={isActiveHamburgerButton}  
                setIsActiveHamburgerButton={setIsActiveHamburgerButton} 
            />  
            <NavList 
                isActiveHamburgerButton={isActiveHamburgerButton}  
                setIsActiveHamburgerButton={setIsActiveHamburgerButton} 
            />
        </header>
    )
}
