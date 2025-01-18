import { SETISLOGGEDIN } from "../types";
import { SetIsLoggedInAction } from "../../types";

const initState = {
    isLoggedIn: null
}

export default function setIsLoggedInReducer(state=initState, action: SetIsLoggedInAction) {
    switch(action.type){
        case SETISLOGGEDIN:
            return {...state, isLoggedIn: action.payload}
        default:
            return state
    }
}