import React from "react";
import { ButtonType } from "../types";

export default function Button({
	id = Math.floor(Math.random() * 1000000).toString(),
	type = "button",
	text = null,
	textColor = "#000",
	textSize = "normal",
	bgColor = "#646cff",
	classNames = "",
	title,
	isDisabled = false,
	onClickHandler = () => {},
	buttonWidth = "",
	buttonHeight = ""
}: ButtonType) {

	return (
		<>
			{text && (				
				<button
					data-testid={id}
					id={id}
					type={type}
					className={`border border-slate-400 rounded-full p-0 w-full d-grid m-auto justify-center items-center
						${isDisabled ? "bg-gray-500" : ""} 
						select-none active:border-2 active:border-slate-300 text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl
						${classNames} ${textSize === "normal" ? "text-md" : "text-xs"}
					`}
					style={{
						backgroundColor: !isDisabled ? bgColor : "",
						color: textColor,
						width: buttonWidth !== "" ? `clamp(${buttonWidth}, 2.5vw, 6rem)` :  "",
						height: buttonHeight !== "" ? `clamp(${buttonWidth}, 2.5vw, 6rem)` :  "",
						lineHeight: buttonHeight !== "" ? `clamp(${buttonWidth}, 2.5vw, 6rem)` :  "",
					}}
					title={title}
					aria-label={title}
					disabled={isDisabled}
					onClick={(e) => onClickHandler(e)}
				>
					{text}
				</button>
			)}
		</>
	);
}
