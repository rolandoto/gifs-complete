import { useCallback } from "react"
import {useLocation} from 'wouter'

const UseSearch = () =>{

    const [location,setLocation] = useLocation()

    const handlsubmit = useCallback(({keywor}) =>{
        setLocation(`/gif/${keywor}`)
        //cada vez que cambia el  setLocation me la creas
      },[setLocation])
      
      return {handlsubmit}
}

export default UseSearch