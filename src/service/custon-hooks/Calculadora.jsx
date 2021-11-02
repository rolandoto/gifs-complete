import React from 'react'
import { useState } from 'react/cjs/react.development'
import CustonHooks from './CustonHooks'
import ListPr from './ListPr'
import ListProduct from './ListProduct'
import StateProduct from './StateProdut'
import './flex.css'

const Calculadora =()=> {
    //const  {counter,increment,decrement,reset}= useCounter()
    //const  counterLeft =  useCounter()
    //custon hooks
    const {increment,decrement,reset,counter,name}  = CustonHooks()

    const counterLeft = CustonHooks()
  
    const {state,addCart,inputNmae,addProduct,remove} = StateProduct()

    const {product,carrito,cart} = state
    
    return(
        <div >
                <div>
                    <div>
                        <h1>custon hooks</h1>   
                        <button onClick={increment}>aumentar</button>
                        <button onClick={decrement}>restar</button>
                        <button onClick={reset}> reset</button>
                        {counter}
                    </div>
                </div>
                <div>
                    <h1> {counterLeft.counter} </h1>
                        <button onClick={counterLeft.increment}>aumentar counterLeft</button>
                        <button onClick={counterLeft.decrement}>decrement counterLeft</button>
                </div>
                <div>
                    <input type="text"  onChange={inputNmae} />
                     <button onClick={addCart} >agregar</button>
                <div>
                    {cart.map((res) =>(
                        <div>
                            {res}
                        </div>
                    ))}
                </div>
                <div className='flex'>
                   {product.map((list)=>(
                       <div>
                        <ul>
                            <li>
                           <ListPr productotal={list} addProduct={addProduct} />
                           </li>
                        </ul>
                       </div>   
                   ))}
                </div>
                    <div>
                        {carrito.map((res) => (
                            <div>
                                <h1> {res.title} </h1>
                                <img src={res.image} alt="" />
                                <button onClick={() => remove(res)}>borrar </button>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}
export default Calculadora