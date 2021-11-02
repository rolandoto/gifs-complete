import React ,{useContext} from "react";
import { useEffect, useState } from "react/cjs/react.development";
import  GitContext  from "../context/GifsContext";
import Grifid from "./Gifid";



const DetailDefault =({id}) => {

   
    const {gifs} = useContext(GitContext)
    
    const gif = gifs.find(single => single.id === id)
    
    if(!gif) return   null
  
    return (
        <div>
           <Grifid gif={gif}  />
        </div>
    )
}
export default DetailDefault