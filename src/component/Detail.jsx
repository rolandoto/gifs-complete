import React, { useContext } from "react";
import  GitContext  from "../context/GifsContext";

import  {StaticContext}  from "../context/StatictContex";
import UseGifContext from "../hooks/UseGifContext";
import UsesingleGifs from "../hooks/UsesinglegIF";
import Grifid from "./Gifid";
import Gifs from "./Gifs";
import {navigate} from '@reach/router'
import Usetitle from '../hooks/useTitle'
const Detail = ({id}) => {

    const {gif,gifLoading,isError} = UsesingleGifs({id})
    const title = gif ? gif.title:''
    Usetitle({title,description:title})
    
    //cuando sea true va decir cargando 
    if(gifLoading) return <h1>cargando  gifss all </h1>
    if(isError) return navigate('/404')
    if(!gif) return null

    return (
      <div> 
          <Grifid gif={gif} />
      </div>
    );
};
export default Detail;
