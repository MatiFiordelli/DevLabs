import React from "react";
import { Button, Input } from "../../../../Resources";
import { SessionFormElementsProps } from "../../../types";
import { setFormData } from "../../../redux/actions";

export default function SessionFormElements({
	dispatch,
	formData,
	isLogin,
	repeatPassword,
	setRepeatPassword,
	isSubmitButtonEnabled,
}: SessionFormElementsProps) {

	return (
		<>
			{formData && (
				<div className="flex flex-col justify-center items-center gap-2 w-full">
					<Input
						id={"email"}
						type={"email"}
						placeholder={"Enter your email"}
						title={"Email"}
						isRequired={true}
						autoFocus={true}
						value={formData?.email}
						onChangeHandler={(
							e: React.ChangeEvent<HTMLInputElement>
						) =>
							dispatch(
								setFormData({
									...formData,
									email: e.target.value,
								})
							)
						}
						maxLength={50}
						pattern={"[a-z0-9._%+]+@[a-z0-9.]+.[a-z]{2,4}$"}
					/>

					<Input
						id={"password"}
						type={"password"}
						placeholder={"Enter your password"}
						title={"Password"}
						isRequired={true}
						value={formData?.password}
						onChangeHandler={(
							e: React.ChangeEvent<HTMLInputElement>
						) =>
							dispatch(
								setFormData({
									...formData,
									password: e.target.value,
								})
							)
						}
						minLength={8}
						maxLength={16}
						pattern={
							"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+]).{8,16}$"
						}
					/>

					{!isLogin && (
						<Input
							id={"repeatPassword"}
							type={"password"}
							placeholder={"Repeat your password"}
							title={"Repeat Password"}
							isRequired={true}
							value={repeatPassword}
							onChangeHandler={(
								e: React.ChangeEvent<HTMLInputElement>
							) => setRepeatPassword(e.target.value)}
							minLength={8}
							maxLength={16}
							pattern={
								"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*+]).{8,16}$"
							}
						/>
					)}

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
						isDisabled={!isLogin ? !isSubmitButtonEnabled : false}
					/>
				</div>
			)}
		</>
	);
}
