import { errorMessages } from "../features/Content/constants/errorMessages"
export function useErrorMessages() {
    
    const getErrorMessage = (key: string) => {
        return errorMessages[key] || "Unknown Error";
    }

    return {
        getErrorMessage
    }
}
