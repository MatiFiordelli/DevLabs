import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export default function Text({
	children,
	underline,
	link
}: {
	children: ReactNode
	underline?: boolean
	link?: string
}) {
	const navigate = useNavigate();

	return (
		<span 
			onClick={() => link ? navigate(link) : {}}
			style={{ 
				textDecoration: underline ? "underline" : "",
				cursor: link ? "pointer" : "",
			}}
			/* className={ underline ? "underline" : ""} */
			title={children as string}
			aria-label={children as string}
			role={"link"}
		>
			{children}
		</span>
	)
}
