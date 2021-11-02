import React, { useState,useEffect } from 'react'
import Getreding from '../service/Gettreding'

const Usetreding =() => {

    const [treding,setTreding]  = useState([])

    useEffect(() => {
        Getreding().then(setTreding)
    },[])

   
    

    return (
        <div>
            <ul>
                 <li> {treding} </li>  
            </ul>
        </div>
    )
}
export default Usetreding