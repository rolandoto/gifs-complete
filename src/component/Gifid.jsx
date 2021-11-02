import React from 'react'

const Grifid =({gif}) => {
    
    return(
        <div>   
            {gif.title}
            <img src={gif.url} alt="" />
        </div>
    )       
}

export default Grifid