import { SETROUTE } from "../types";

export const setRoute = (payload: string) => ({
    type: SETROUTE,
    payload: payload
})