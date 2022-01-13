import React from "react";
import "./Gif.css";
import {Link} from '@reach/router'
import { Image } from '../style-components/app'
import useNearscreen from "../hooks/useNear";
import Usetitle from "../hooks/useTitle";

const Gifs = ({id,title,url}) => {
    
  //cambia el title del navegador 
  Usetitle({title})

  const {isNearScreen,Ref} =  useNearscreen()

  //siempre se tiene que colocar en <article ref={Ref}></article>
  //va hacer el encabezado <article> sNearScreen </article> 
    return (
      <div>
        <div>
        <article ref={Ref}>
            { isNearScreen && (
            <Link to={`/Detail/${id}`}>
            <div >
                  <h4>{title}</h4>
                  <Image src={url} />;
            </div>
            </Link>
            )}
            </article>
        </div>
      </div>
    );
  };
export default   React.memo(Gifs,(prevProps,nextProps) =>{
  return prevProps.id ===nextProps.id
})
