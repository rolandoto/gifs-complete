import { useContext } from "react"
import { useEffect, useState } from "react/cjs/react.development"
import  GitContext from "../context/GifsContext"
import GetSingleGif from "../service/getsingleGif"
import UseGift from "./UseGift"


const UsesingleGifs =({id})=> {
    const {gifs} = useContext(GitContext)
    
    const gitfronCapche = gifs.find(singlegif => singlegif.id == id)
    
    const [gif,setGif] = useState(gitfronCapche)
    const [gifLoading,setgifLoading] = useState(false)
    const [isError,setIsError]  = useState(false)
    
    useEffect(() =>{
        if(!gif){
        //llamamos a servicio sino tenemos gif
        setgifLoading(true)
        GetSingleGif({id})
            .then(gif =>{
                setGif(gif)
                setgifLoading(false)          
            }).catch(err =>{
                console.log(err)
                setgifLoading(false)
                setIsError(true)
            }) 
        }
    },[id,gif])

   

    return {gif,gifLoading,isError}

}
export default  UsesingleGifs