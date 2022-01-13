import React from 'react'
import ListHome from './ListHome'
import {SiReact } from "react-icons/si";
import { Rotate } from '../Style-component-Global/style';
import { useEffect, useRef } from 'react/cjs/react.development';
import Valor from '../hooks/UseScrean';

const  Home  =()=>{

     const {name} = Valor()

    

     const handScroll = () => {
         const elem = document.getElementById('re')
         elem.scrollIntoView();
     }

    const re = useRef(null)

    //estoy tomando el valor de la referencia   y lo enviar como una funcion name
    const handinput =() =>{
        const ver  = re.current.value
        name(ver)
    }

     /*const re = useRef(null)

     const hadnref =()=>{
        const total = re.current.value
        console.log(total)
     }
     */
   
    return(
        <div>
            <div>
                <input type="text" ref={re} onChange={handinput} />
                
                <button onClick={handScroll}>abajar</button>
            </div>
            <Rotate>
            < SiReact  color='blue' size={50} />
            </Rotate>
            <ListHome />
            <div id='re'>
                <h1>rolando</h1>
            </div>
        </div>
    )
}
export default Home