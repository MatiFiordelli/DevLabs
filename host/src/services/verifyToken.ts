import urls from "../utils/helpers/urls";

export const verifyToken = async () => {
    const token = localStorage.getItem("token");
    const URI = urls["verify-token"];

    if (token) {
        return fetch(URI, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                return data.message === "OK";
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
    } else {
        return false; 
    }
};
