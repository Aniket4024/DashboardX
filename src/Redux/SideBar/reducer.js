import { OPEN } from "../actionType";



const initialState = {
    open:true
}

export const reducer = (state = initialState,{type,payload})=>{
    switch(type){
        case OPEN:
            return {...state,open:!state.open}
        default:
            return state;
    }
}