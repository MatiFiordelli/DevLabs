import { EntriesDataType } from "../../types";
import { ErrorMessage } from "../interfaces";
import { SETFORMDATA, SETFORMERROR } from "../types";

export const setFormError = (payload: ErrorMessage) => ({
    type: SETFORMERROR,
    payload: payload
})

export const setFormData = (payload: EntriesDataType) => ({
    type: SETFORMDATA,
    payload: payload
})