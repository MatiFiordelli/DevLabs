import { SETISLOGGEDIN } from "../types";

export const setIsLoggedInAction = (payload: boolean | null) => ({
    type: SETISLOGGEDIN,
    payload: payload
})

