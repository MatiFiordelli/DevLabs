import React from "react";
import { useSelector } from "react-redux";
import FormErrorMessage from "../../../presentational/atoms/FormErrorMessage";

export default function FormErrorMessageContainer() {
	const errorMessage = useSelector(
		(state: { setFormErrorReducer: { errorMessage: string } }) =>
			state.setFormErrorReducer.errorMessage
	);

	return <FormErrorMessage errorMessage={errorMessage} />;
}
