import { ADD_TO_CART } from "./Action";


const initState={
    Cart:[]
}

function Reducer(state=initState,{type,payload}){
    switch(type){
        case ADD_TO_CART:{
            return{
                Cart:[...state.Cart,payload]
            }
        }
        default :return state;
    }
}
export default Reducer