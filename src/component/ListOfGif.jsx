import React from "react";
import Gifs from "./Gifs";
import Spinner from 'react-bootstrap/Spinner'
import UseGift from "../hooks/UseGift";
import { Boton, Center, Flexed, ImgWraper, Lx } from '../style-components/app'
import useNearscreen from "../hooks/useNear";
import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import debounce  from "just-debounce-it";
import { useCallback } from "react";
const ListOfGif = ({keyword}) => {
  console.log(keyword)
  const {loading,gifs,setPage} = UseGift({keyword})

  const externalRef = useRef()
 
  //const handleNextpage =() =>{
  //  setPage(prevepage => prevepage +1)
 // } 

  const {isNearScreen,Ref} = useNearscreen({externalRef:
    loading ?null: externalRef,once :true})
    console.log(isNearScreen) 
//debounce es una dependencia para ejecutar una sola vez cada cierto minuto
  const debouncepage =  useCallback(debounce( 
    () => setPage(prevepage => prevepage +1),1000
   
  ),[]) 
    const handclick = useCallback(()=> {
        console.log(gifs.length)
        //usecallback que hasta tiene una deendenia 
        //sino coloca una dependencia 
    },[])

  useEffect(() => {
    //cuando este ejecutando siempre me va enviar un true o false
    if(isNearScreen) debouncepage()
    
  },[isNearScreen,debouncepage])

  return (
    <div>
          {loading ? <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
          </Spinner>:
              <Lx>
                {gifs.map((listgifs) => (
                      <ImgWraper>
                    <Gifs  key={listgifs.id} gifs={listgifs} />
                    </ImgWraper>
                ))}
             </Lx>
            }
          <div  ref={Ref} >

            </div>

        <button onClick={handclick}>
            arriba
          </button>
           
     </div>
  );
};
export default ListOfGif;