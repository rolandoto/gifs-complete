import React,{useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import getFavs from '../service/getFav'

const Context = React.createContext({})

export const  UserContext = ({children}) => {
        const  [favs,setFavs] = useState([])
        const [jwt,setJwt] =useState( 
                () => window.sessionStorage.getItem('jwt')
                )
        useEffect(() =>{
        if(!jwt) return setFavs([])
        //depende del token de la persona que se registra va a mirar los favs
        getFavs({jwt}).then(setFavs)
        },[jwt])
        
        return  <Context.Provider value={{jwt,setJwt,favs,setFavs}}>
                {children}
                </Context.Provider>
} 

export default Context