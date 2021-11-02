import { useContext } from "react"
import GitContext  from "../context/GifsContext"

const UseGifContext =() => {
   const {gifs} = useContext(GitContext)
   
   return  {gifs}
    
}

export default UseGifContext