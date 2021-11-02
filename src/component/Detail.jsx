import React, { useContext } from "react";
import  GitContext  from "../context/GifsContext";

import  {StaticContext}  from "../context/StatictContex";
import UseGifContext from "../hooks/UseGifContext";
import Grifid from "./Gifid";
import Gifs from "./Gifs";


const Detail = ({id}) => {

const {gifs} =UseGifContext()

  const re = UseGifContext()
  console.log(re)
    


  const gif = gifs.find(singleGif => singleGif.id ===id)
  
  if(!gif) return <h1>no hay imagenes</h1>
  return (
    <div> 
        <Grifid gif={gif} />
    </div>
  );
};
export default Detail;
