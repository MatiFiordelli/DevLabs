import { useEffect, useState } from "react";
import endpoints from "../utils/helpers/endpoints";

const useVerifyToken = async () => {
	const [isValid, setIsValid] = useState<boolean | null>(null);

	const token = localStorage.getItem("token");
	const URI = endpoints["verify-token"];

	useEffect(() => {
		
		if (token) {
			fetch(URI, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((res) => {
					if (!res.ok) { 
						throw new Error(`HTTP error! status: ${res.status}`); 
					}
					return res.json()
				})
				.then((data) => {
					if (data.message === "OK") setIsValid(true)
					else setIsValid(false)
				})
				.catch((err) => {
					setIsValid(false);
					console.log(err);
				});
		} else setIsValid(false);
	}, [])

	return isValid;
};

export default useVerifyToken;