import React, { useEffect, useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import styles from './index.module.css'
import { IsLoggedInContext } from "../../contexts";

export default function Layout({children}: {children:React.ReactNode} ) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const setGlobalStateIsLoggedIn = (e: CustomEvent<{isLoggedIn: boolean}>) => {
        setIsLoggedIn(e.detail.isLoggedIn)
	}

    useEffect(()=>{
        window.addEventListener('isLoggedInDetection', ((e: CustomEvent<{isLoggedIn: boolean}>)=>setGlobalStateIsLoggedIn(e)) as EventListener)

        return () => {
            window.removeEventListener('isLoggedInDetection', ((e: CustomEvent<{isLoggedIn: boolean}>)=>setGlobalStateIsLoggedIn(e)) as EventListener)
        }

    },[])

    return (
        <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn}}>
            <section className={styles['component-layout']}>
                <Header />
                    <section className={styles["main-content"]}>
                        {children}
                    </section>
                <Footer />
            </section>
        </IsLoggedInContext.Provider>
    )
}
