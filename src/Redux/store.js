import {applyMiddleware , combineReducers , legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { reducer as SideBarReducer } from "./SideBar/reducer"

const rootReducer = combineReducers({
    SideBarReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))