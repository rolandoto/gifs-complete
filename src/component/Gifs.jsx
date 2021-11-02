import React from "react";
import "./Gif.css";
import {Link} from '@reach/router'
import { Image } from '../style-components/app'
import useNearscreen from "../hooks/useNear";
import { useRef } from "react/cjs/react.development";

const Gifs = ({gifs}) => {


const {isNearScreen,Ref} =  useNearscreen()

//siempre se tiene que colocar en <article ref={Ref}></article>
//va hacer el encabezado <article> sNearScreen </article> 
  return (
    <div>
      <div>
      
      <article ref={Ref}>
     
          { isNearScreen && (
          <Link to={`/Detail/${gifs.id}`}>
          <div key={gifs.name}>
                <h4>{gifs.title}</h4>
                <Image src={gifs.url} />;
          </div>
          </Link>
          )}
             
        
          </article>
      </div>
    </div>
  );
};
export default Gifs;
