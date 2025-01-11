import React from "react";
import Text from "../../atoms/Text";

export default function LoginSignupText({ isLogIn }: { isLogIn: boolean }) {
	return (
		<div className="flex justify-center items-center text-center">
			{!isLogIn ? (
				<>
					<Text>Already have an account?&nbsp;</Text>
					<Text underline={true} link={"/login"}>
						Log in
					</Text>
				</>
			) : (
				<>
					<Text>Don't have an account?&nbsp;</Text>
					<Text underline={true} link={"/signup"}>
						Sign up
					</Text>
				</>
			)}
		</div>
	);
}
