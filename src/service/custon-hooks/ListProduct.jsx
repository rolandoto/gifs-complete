import React from 'react'

const ListProduct =({item,product,addProduct}) => {
const hand = (ingresar) =>{
    addProduct(ingresar)
}
    return (
        <div  className='Container'> 
            <h1>{item} </h1>
            <div>
            <h1> {product.price}</h1>   
            <img src={product.image} alt="" />
            <button  onClick={hand(product)}> agregar</button>
            </div>
        </div>
    )
}
export default ListProduct