import { EntriesDataType } from "../../types"

export interface SetFormDataInterface {
    type: string
    payload: EntriesDataType
}

export type ErrorMessage = {
    errorMessage: string
}
export interface SetFormErrorInterface {
    type: string
    payload: ErrorMessage
}