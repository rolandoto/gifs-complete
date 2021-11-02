import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ListPr = ({productotal,addProduct}) => {
    return (
       <div className='card' > 
           <h1> {productotal.title}</h1>
            <img src={productotal.image} alt="" className='image' />
            <h1> {productotal.price}$</h1>
            <Button onClick={() => addProduct(productotal)} variant="contained" color="primary">
            Agregar cart
            </Button>   
        </div>
    )
}
export default  ListPr