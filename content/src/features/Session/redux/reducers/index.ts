import { combineReducers } from "redux"
import setFormErrorReducer from "./setFormErrorReducer"
import setFormDataReducer from "./setFormDataReducer"

const localReducer = combineReducers({
    setFormDataReducer,
    setFormErrorReducer
})

export default localReducer