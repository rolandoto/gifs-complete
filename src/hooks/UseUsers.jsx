import {useCallback, useContext} from 'react'
import { useState } from 'react/cjs/react.development'
import UserContext from '.././context/UseContext'
import loginService from '.././service/loginService'
import FavService from '../service/FaService'
import FavDeleteService from '../service/FavDeleteService'
import ServiceRegister from '../service/ServiceRegister'
const UseUsers =()=>{

    const {jwt,setJwt,favs,setFavs} =  useContext(UserContext) 
    const [state,setState] = useState({loading: false, error: false})
    
    const login = useCallback(({username,password})=>{
    setState({loading:true ,error :false})
    loginService({username,password}).then(jwt =>{
        window.sessionStorage.setItem('jwt',jwt)
        setState({loading:false,error:false})
        setJwt(jwt)
    })
    .catch(err =>{
        window.sessionStorage.removeItem('jwt')
        setState({loading:false,error:true})
        console.error(err)
    })
    },[setJwt])
    
    const AddFavs = useCallback(({id}) =>{
        FavService({id,jwt}).then(favs =>{
            console.log(jwt)
            setFavs(favs)
        }).catch(err =>{
            console.error(err)
        })
    },[])
    
    const DelteFavs =useCallback(({id}) =>{
        FavDeleteService({jwt,id}).then(index =>{
            setFavs(index)
        }).catch(e =>{
            console.error(e)
        })
    },[])

    const logout =useCallback(()=>{
        window.sessionStorage.removeItem('jwt')
        setJwt(null)
    },[setJwt])
    
    const register = useCallback(({username,password}) =>{
        setState({loading:false,error:false})
        ServiceRegister({username,password}).then(index =>{
            setState({loading:true,error:false})
           
        }).catch(err =>{
            setState({loading:false,error:true})
            console.error(err)
        })
    },[setJwt])

    
    return {
        //boolean
        isLoggedIn: Boolean(jwt),
        isLoginLoading:state.loading,
        isLoginError:state.error,
        login,
        logout,
        AddFavs,
        favs,
        register,
        jwt,
        DelteFavs
    }
}
export default UseUsers