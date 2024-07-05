import { createSlice } from "@reduxjs/toolkit";
import { RootState } from './index';  
interface CartState{
    cart:any,
    order:any
}
const initialState:CartState={
    cart:[],
    order:[],
}
const cartSlice = createSlice({
    name:"cart",
    initialState,

    reducers:{
        addTocart:(state,action)=>{
            const isAvalible = state.cart.find((item:any)=>{
                return item.id === action.payload.id
            })
            if(isAvalible){
                state.cart = state.cart.map((item:any)=>{
                    return item.id === action.payload.id ? {...item ,quantity :item.quantity + 1} : item
                })
            }
            else{
                state.cart.push({...action.payload ,quantity:1})
            } 
        }, 
        removeFromCart :(state,action)=>{
            state.cart = state.cart.filter((item:any)=>{
                return item.id !== action.payload 
            })
        },
        incrementQuantity:(state,action)=>{
            state.cart = state.cart.map((item:any)=>{
                return item.id === action.payload.id ? {...item, quantity:item.quantity+1} : item;
            })
        },
        decrementQuantity:(state,action)=>{
            state.cart = state.cart.map((item:any)=>{
                return item.id === action.payload.id ? {...item, quantity:item.quantity-1} : item;
            })
        },
        addToOrder:(state,action)=>{
             state.order.push(action.payload)
        }
    }
})

export const {addTocart , removeFromCart , incrementQuantity ,decrementQuantity ,addToOrder} = cartSlice.actions
export const getCart = (state:RootState) => state.cart.cart
export const getorder = (state:RootState) => state.cart.order
export default cartSlice.reducer