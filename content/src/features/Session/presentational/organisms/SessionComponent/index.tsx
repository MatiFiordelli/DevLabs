import React, { FormEvent, useState } from "react";
import FormErrorMessageContainer from "../../../containers/SessionContainer/FormErrorMessageContainer";
import Title from "../../atoms/Title";
import LoginSignupText from "../../molecules/LoginSignupText";
import { Form } from "../../../../Resources/index";
import { motion } from "framer-motion";
import { sessionVariant } from "./variants/session.variant";
import { SessionProps } from "../../../types";
import SessionFormElementsContainer from "../../../containers/SessionContainer/SessionFormElementsContainer";

export default function SessionComponent({ handleSigninSubmit, isLogIn }: SessionProps) {

	return (
		<motion.section 
			className="w-[75vw] sm:w-[50%] md:w-[40%] h-screen d-flex content-start justify-items-center m-auto"
			variants={sessionVariant}
			initial={"initial"}
			animate={"animate"}
			exit={"exit"}
		>
			<Title isLogIn={isLogIn} />
			<Form handleSubmit={(e: FormEvent<HTMLFormElement>) => handleSigninSubmit(e)}>
				<SessionFormElementsContainer isLogin={isLogIn} />
                <FormErrorMessageContainer />
				<LoginSignupText isLogIn={isLogIn} />
			</Form>
		</motion.section>
	);
}
