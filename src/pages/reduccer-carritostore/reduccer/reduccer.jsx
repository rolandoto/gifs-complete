
export const reducer =(state,action) =>{
    
    switch (action.type){
        case 'addCart':
            if(!state.cart.length == 0 ){
                const {quantity} = state.cart
                console.log(quantity)
                return {...state,
                    cart:[...state.cart,action.playoad],
                  
                }
            }else {
                console.log('no entro')
                return {...state,
                    cart:[...state.cart,action.playoad],
                    quantity:state.cart.quantity=+1
                    
                }
            }
           

        case 'remove':
            return ({
                ...state,
                cart:state.cart.filter(item =>  item.id !== action.playoad.id),
                totalPrice:state.cart.filter(item =>  item.id !== action.playoad.id)
            })
        default:
            return state
    }
}