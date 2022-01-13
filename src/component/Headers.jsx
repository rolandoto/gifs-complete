import React from 'react'
import {Link} from '@reach/router'
import UseUsers from '../hooks/UseUsers'

const Headers =()=>{
    const {isLoggedIn,logout} = UseUsers()

    const handclick =(e)=>{
        e.preventDefault()
        logout()
    }
    
    return (
        <header className='gf-Header'>
            {
                isLoggedIn ?
                <Link to='#' onClick={handclick} >
                logedor
                 </Link>
                : 
                (
                <div>

                    <div>
                <Link to='/Login'>  
                login
                 </Link>
                    </div>
                  <Link to='/Register'>  
                Register
                 </Link>

                    </div>
              
                )
                

                 
                
           
            }
        </header>
    )
}

export default Headers