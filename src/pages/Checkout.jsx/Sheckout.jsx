import React,{useContext}  from 'react'

import { ContexCart } from '../../context/ContexCart'

const Checkout = () => {

    const contextcart = useContext(ContexCart)
    const {state,dispatch,subtotal} =contextcart
    console.log(state)
    const {cart,totalPrice} =state
    console.log(cart)
    const remove = (event) => {
        dispatch({type:'remove',playoad:event})
    }

    return (
         <div className='container'>
            <div>
                {cart.map((listprod)=> (
                    <ul key={listprod.id}>
                        <li>{listprod.title} </li>
                            <img src={listprod.image} alt="" />
                            <li> $:{listprod.price} </li>
                            <h1> la cantidad es: {listprod.cantidad} </h1>
                        <button onClick={() => remove(listprod)} >borrar</button>
                        <div>
                       
                        </div>
                    </ul>
                ))}
            </div>
            <h1>cantidad total</h1>
            {cart.length > 0 &&  <h1> {cart.length + totalPrice.length}</h1>}
           <div>
               <h1>la cantidad es  </h1>
               <h3>{`precio total:$ ${subtotal()} `}</h3>
           </div>

           
        </div>
    )
}

export default  Checkout