import React,{useState} from 'react'
//import {navigate} from  '@reach/router'
import UseUsers from '../hooks/UseUsers'
import { useEffect } from 'react/cjs/react.development'
import { navigate } from '@reach/router'
import './Login.css'
const Login =()=>{
    
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const {login,isLoggedIn,isLoginLoading,isLoginError} = UseUsers()
    
    useEffect(()=>{
        if(isLoggedIn) return   navigate('/')
    },[isLoggedIn,navigate])

    const handlSubmit =(e)=>{
        e.preventDefault()
        login({username,password})
    }
    
    return (
        <>  
            <h2>Login</h2>

            {isLoginLoading && <strong> Checking  credentials </strong>}

            {!isLoginLoading &&   
            <form onSubmit={handlSubmit} className='form' >
                    <label>
                        username
                        <input 
                            placeholder='username'
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            />
                    </label>
                    <label >
                    password
                        <input 
                        type='password' 
                        placeholder='password'
                        value={password} 
                        onChange={(e) =>  setPassword(e.target.value)} 
                        />
                    </label>
                    <button className='btn'>login</button>
            </form>
             }
             {isLoginError && <strong> Credentials  are  isinvalid </strong>}
    </>
    )
}

export default Login