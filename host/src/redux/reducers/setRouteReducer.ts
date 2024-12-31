import { SETROUTE } from "../types";
import { ReduxAction } from "../../types";

const initState = {
    route: null
}

export default function setRouteReducer(state=initState, action: ReduxAction) {
    switch(action.type){
        case SETROUTE:
            return {...state, route: action.payload}
        default:
            return state
    }
}