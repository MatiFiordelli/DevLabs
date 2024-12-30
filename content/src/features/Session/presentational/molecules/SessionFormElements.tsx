import React from "react";
import { Button, Input } from "../../../Resources";

export default function SessionFormElements() {
	return (
		<div className="flex flex-col justify-center items-center gap-2 w-full">
			<Input
				id={"email"}
				type={"email"}
				placeholder={"Enter your email"}
				title={"Email"}
				isRequired={true}
				autoFocus={true}
				/*                         value={entriesData.email}
                        onChangeHandler={(e:any)=>onChangeInputs(e)} */
				maxLength={50}
				pattern={"[a-z0-9._%+]+@[a-z0-9.]+.[a-z]{2,4}$"}
			/>

			<Input
				id={"password"}
				type={"password"}
				placeholder={"Enter your password"}
				title={"Password"}
				isRequired={true}
				/*                         value={entriesData.password}
                        onChangeHandler={(e:any)=>onChangeInputs(e)} */
				minLength={8}
				maxLength={16}
				pattern={
					"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+]).{8,16}$"
				}
			/>

			<Button
				type="submit"
				text={"SUBMIT"}
				title={"Submit button"}
				textColor="#FFF"
				textSize="small"
				bgColor="#878cf5"
				buttonWidth=""
				buttonHeight=""
				classNames="h-[2.8rem] 2xl:h-[4rem] mt-2"
			/>
		</div>
	);
}
