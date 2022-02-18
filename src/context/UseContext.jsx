import React,{useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import Useform from '../hooks/Useform'
import getFavs from '../service/getFav'

const Context = React.createContext({})

export const  UserContext = ({children}) => {
        const  [favs,setFavs] = useState([])
        const [jwt,setJwt] =useState( 
                () => window.sessionStorage.getItem('jwt')
                )

        const {keywor,raiting,time} =Useform()

        useEffect(() =>{
        if(!jwt) return setFavs([])
        //depende del token de la persona que se registra va a mirar los favs
        getFavs({jwt}).then(setFavs)
        },[jwt])
        
        return  <Context.Provider value={{jwt,setJwt,favs,setFavs,keywor,raiting,time}}>
                {children}
                </Context.Provider>
} 

export default Context