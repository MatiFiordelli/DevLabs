import React from "react";
import styles from "./index.module.css";
import urls from "../../../utils/helpers/urls.ts";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles['footer__content']}>
				<div className={styles['left-section']}>
					<p className={styles['left-section__title']}>DevLabs ToDo App</p>
					<p className={styles['left-section__content']}>
						Organize your life, one step at a time. Our ToDo application is designed to help you stay on top of your tasks and achieve your goals. Whether you're managing personal or professional projects, our tool offers the flexibility and functionality you need.
					</p>

					
				</div>
				
				<div className={styles['right-section']}>
					<div className={styles['right-section__content']}>
						<p className={styles['right-section__telefone']}>
							Telephone: +1 234 567 890
							</p>
						<p className={styles['right-section__address']}>
							Address: 123 Street, Rafaela, Santa Fe
						</p>
					</div>
				</div>
			</div>
			<p className={styles['footer__copyright']}>
				Copyright ©2025
				<a
					href={urls.linkedin}
					title="Ir a LinkedIn.."
					className="ms-1 text-white-50"
				>
					Matias Fiordelli
				</a>
			</p>
		</footer>
	);
}