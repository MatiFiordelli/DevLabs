import React, { FormEvent } from "react";
import { Form } from "../../../Resources/index";
import { SessionProps } from "../../types";
import SessionFormElements from "../molecules/SessionFormElements";
import FormErrorMessage from "../atoms/FormErrorMessage";

export default function SessionComponent({ handleSigninSubmit, error }: SessionProps) {
	
	return (
		<section className="w-[75vw] sm:w-[50%] md:w-[40%] h-screen d-flex content-center justify-items-center m-auto">
			<p className="text-center mb-5 text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl">LOGIN</p>
			<Form handleSubmit={(e: FormEvent<HTMLFormElement>) => handleSigninSubmit(e)}>
				<SessionFormElements />
                <FormErrorMessage error={error} />
			</Form>
		</section>
	);
}
