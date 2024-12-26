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
						Organiza tu vida, un paso a la vez. Nuestra aplicación de ToDo está diseñada para ayudarte a mantenerte al día con tus tareas y alcanzar tus metas. Ya sea que estés gestionando proyectos personales o profesionales, nuestra herramienta te ofrece la flexibilidad y funcionalidad que necesitas.
					</p>

					
				</div>
				
				<div className={styles['right-section']}>
					<div className={styles['right-section__content']}>
						<p className={styles['right-section__telefone']}>
							Teléfono: +1 234 567 890
							</p>
						<p className={styles['right-section__address']}>
							Dirección: Calle 123, Rafaela, Santa Fe
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