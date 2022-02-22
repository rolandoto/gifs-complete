import React from 'react'

const Lisproduts =({prod,handdd})=> {
    
    return (
        <>
            <div key={prod.id}>
                <h1>{prod.title} </h1>
                <img src={prod.image} alt="image" />
                <p>{prod.title} </p>
                <button onClick={() => handdd(prod)} >agregar</button>
            </div>
        </>
    )
}

export default Lisproduts