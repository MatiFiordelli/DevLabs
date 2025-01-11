import { SetFormErrorInterface } from "../interfaces";
import { SETFORMERROR } from "../types";

const initState = {
    errorMessage: ""
}

export default function setFormErrorReducer(state=initState, action: SetFormErrorInterface) {
    switch(action.type){
        case SETFORMERROR:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            }
        default:
            return state
    }
}