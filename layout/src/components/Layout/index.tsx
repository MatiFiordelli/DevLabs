import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import styles from './index.module.css'

export default function Layout({children}: {children:React.ReactNode} ) {

    return (
        <section className={styles['component-layout']}>
            <Header />
                <section className={styles["main-content"]}>
                    {children}
                </section>
            <Footer />
        </section>        
    )
}
