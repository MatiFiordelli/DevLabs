import { EntriesDataType } from "../types";

export const authService = async (
	entries: EntriesDataType,
	url: string,
) => {

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(entries),
		});
		const data = await response.json();

		if (data.message!=='OK') {
			throw new Error(data.message);
		}
		
		localStorage.setItem("token", data.token);		
		alert('Success!')
        return "OK"
	} catch (error) {
		throw error;
	}
};
