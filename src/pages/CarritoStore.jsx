import React, { useReducer } from 'react'
import { useContext, useState } from 'react/cjs/react.development'
import { AiOutlineShoppingCart } from "react-icons/ai";
import {Link} from '@reach/router'
import { Usecart } from '../hooks/Usecart';
import { ContexCart } from '../context/ContexCart';
import { Flex, Nav } from '../style-components/app';
import Lisproduts from './reduccer-carritostore/Component/Lisproducts';
const CarritoStore =() =>{
    
    const usecart =useContext(ContexCart)
    
    const {state,dispatch} = usecart
    const {cart,product,totalPrice} =state
   
    const [dato,setDato] =useState({
        nombre:'',
        apellido:''
    })

   
    const handDato =(event) =>{
        setDato({
            ...dato,
            [event.target.name]:event.target.value
        })
    }
    const handdd =(event) => {
        dispatch({type:'addCart',playoad:event})
    }
   
    /*const sendDate =(e) =>{
        e.preventDefault()
        console.log(dato.nombre,dato.apellido)
        console.log(dato)
    }
    */
    return(
        <> 
            <div>
                <Nav>
                    <span>
                        <Link to='/Cheackout'>
                            <AiOutlineShoppingCart size={50}  color='black'  />
                            <div>
                                {cart.length >0 &&   <span className='alert'>{cart.length}</span>}
                                {totalPrice.length > 0 &&  <span> X {totalPrice.length}</span>}
                            </div>
                        </Link>
                    </span>
                </Nav>
                    <Flex>
                        {product.map((prod) => (
                        <Lisproduts prod={prod} handdd={handdd} />
                        ))}
                     </Flex>
            </div> 
        </>
    )
}

export default CarritoStore