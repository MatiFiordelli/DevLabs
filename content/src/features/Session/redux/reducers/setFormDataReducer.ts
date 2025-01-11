import { SetFormDataInterface } from "../interfaces";
import { SETFORMDATA } from "../types";

const initState = {
    email: "",
	password: ""
}

export default function setFormDataReducer(state=initState, action: SetFormDataInterface) {
    switch(action.type){
        case SETFORMDATA:
            return {
                ...state, 
                email: action.payload.email, 
                password: action.payload.password
            }
        default:
            return state
    }
}