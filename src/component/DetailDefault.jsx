import React ,{useContext} from "react";
import { useEffect, useState } from "react/cjs/react.development";
import  GitContext  from "../context/GifsContext";
import UsesingleGifs from "../hooks/UsesinglegIF";
import Grifid from "./Gifid";



const DetailDefault =({id}) => {

    const {gif} = UsesingleGifs({id})
    if(!gif) return   null
    
    return (
        <div>
           <Grifid gif={gif}  />
        </div>
    )
}
export default DetailDefault