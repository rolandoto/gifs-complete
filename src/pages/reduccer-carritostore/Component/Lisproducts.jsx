import React from 'react'
import {Img, LisProduct } from '../../../style-components/app'


const Lisproduts =({prod,handdd})=> {
    
    return (
        <>
            <LisProduct key={prod.id}>
                <h1>{prod.title} </h1>
                <Img src={prod.image} alt="image" />
                <p>{prod.title} </p>
                <button onClick={() => handdd(prod)} >agregar</button>
            </LisProduct>
        </>
    )
}

export default Lisproduts