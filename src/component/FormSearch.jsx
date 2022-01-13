import { navigate } from "@reach/router";
import React, { useCallback ,useState,useReducer} from "react";
import { useLocation } from "wouter";
import Useform from "../hooks/Useform";

const  RATINGS = ['g','pg','pg-13','r']

const FormSeach =({initialKeword='',initalRaiting=''}) =>{
    //const [keywor,setKeyword] =useState(initialKeword)
    //const [raiting,setRaitings] = useState(decodeURIComponent(initalRaiting))
    const [location,setLocation] = useLocation()
    //const [time,setTime] = useState(0)
    
    //aqui viene el valor updateKeword,updateRaiting del onchange
    const {keywor,raiting,time,updateKeword,updateRaiting}  = Useform({initialKeword,initalRaiting})

    const handlinput =(e)=> {
        updateKeword(e.target.value)
        }
    const handlsubmit = (e) =>{
        e.preventDefault()
        //este valor se lo enviamo por props  al padre
        //pre({keywor})
         navigate(`/gif/${keywor}/${raiting}`)
    }
    
    const handchangeraiting =(e)=>{
        updateRaiting(e.target.value)
        
        }

    return(
         <form onSubmit={handlsubmit}>
            <input type="text" onChange={handlinput} value={keywor} />
            <input type="submit" />
            <select onChange={handchangeraiting} value={raiting}>
                <option disabled >raiting tuype</option>
                {RATINGS.map(ratings => <option key={ratings}>{ratings} </option> )}
            </select>
            <small>{time}</small>
        </form>
    )
}
//si sus propos cambian el react memo se actualizar sino no se renderiza
//renderizar React.memo Si los resultados del render son diferentes, React actualiza el DOM.
export default  React.memo(FormSeach)