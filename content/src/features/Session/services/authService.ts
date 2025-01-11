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
		
		alert('Success!')
		localStorage.setItem("token", data.token);		
        return "OK"
	} catch (error) {
		throw error;
	}
};
