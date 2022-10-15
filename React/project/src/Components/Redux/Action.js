
export const ADD_TO_CART="ADD_TO_CART";

const addToCart=(item)=>{
    return{
        type:ADD_TO_CART,
        payload:item
    }
}
export default addToCart