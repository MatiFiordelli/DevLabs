import { SETISLOGGEDIN } from "../types";

export const setIsLoggedInAction = (payload: boolean) => ({
    type: SETISLOGGEDIN,
    payload: payload
})

