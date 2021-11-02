import { useReducer } from "react"
import { initial } from "../pages/reduccer-carritostore/Action/initialState"
import { reducer} from "../pages/reduccer-carritostore/reduccer/reduccer"


export const Usecart =() => {
    const [state,dispatch] = useReducer(reducer,initial)

    const {cart,totalPrice} =state 


    
        const subtotal =() => {
            const sum = ((curr, next) => curr + next.price);
            const total = cart.reduce(sum,0)

            const sumtotal = ((curr, next) => curr + next.price);
            const subtotal = totalPrice.reduce(sumtotal,0)

            const definitotal =  subtotal + total
            
            return definitotal
    }

    
    

    return{state,dispatch,subtotal}
}