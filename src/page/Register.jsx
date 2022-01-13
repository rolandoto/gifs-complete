import { navigate } from '@reach/router'
import React, { useEffect, useState } from 'react'
import UseUsers from '../hooks/UseUsers'

const Register =() =>{
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const {register,isLoginLoading,isLoginError} = UseUsers()
    
    const handlSubmit =(e)=>{
        e.preventDefault()
        register({username,password})
    }
    return (
        <>  
            <h2>Register</h2>
            {isLoginLoading && <strong> congrulations  register exict   </strong>}
        
            {!isLoginLoading &&   
            <form onSubmit={handlSubmit} >
                    <input 
                        placeholder='username'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    <input 
                        type='password' 
                        placeholder='password'
                        value={password} 
                        onChange={(e) =>  setPassword(e.target.value)} 
                        />
                    <button>login</button>
            </form>
             }
             {isLoginError && <strong> Credentials  are  isinvalid </strong>}
    </>
    )
}

export default Register