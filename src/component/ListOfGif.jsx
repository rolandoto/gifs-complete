import React from "react";
import Gifs from "./Gifs";

import UseGift from "../hooks/UseGift";
import { Boton, Center, Flexed, ImgWraper, Lx } from '../style-components/app'
import useNearscreen from "../hooks/useNear";
import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import debounce  from "just-debounce-it";
import { useCallback } from "react";
import Usetitle from "../hooks/useTitle";
import FormSeach from './FormSearch'
import UseSearch from "../hooks/UseSearch";

const ListOfGif = ({keyword,raiting}) => {


  const {loading,gifs,setPage} = UseGift({keyword,raiting})

  const externalRef = useRef()
  
  //const handleNextpage =() =>{
  //  setPage(prevepage => prevepage +1)
  // } 

  //si hay datos me envia las longitudes

  const title  = gifs ? `${gifs.length}  Resultado es ${keyword}`:''
   Usetitle({title,description:title})
  
  const {isNearScreen,Ref} = useNearscreen({externalRef:
    loading ?null: externalRef,once :true})
    
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
          {loading ? <h1 animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
          </h1>:
              <div>
                 <FormSeach  />
                {gifs.map(({id,title,url, ...resp}) => (
                   
                    <div key={id}
                          url={url}
                          id={id}
                          title={title}
                          resp={resp}
                          extraInfo={resp} />
                    
                ))}
             </div>
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