import React from 'react'
import ListHome from './ListHome'
import {SiReact } from "react-icons/si";
import { Rotate } from '../Style-component-Global/style';

const   Home  =()=>{

     const handScroll = () => {
         const elem = document.getElementById('re')
         elem.scrollIntoView();
     }

    return(
        <div>
            <div>
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