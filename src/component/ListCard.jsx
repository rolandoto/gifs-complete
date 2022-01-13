import React, { Fragment } from 'react'
import {Link} from '@reach/router'

import { FLeximage,Image } from '../style-components/app'
import Fav from './Fav'

const   ListCard =({id,title,url}) => {

  return (
        <div>
           
            <Fav id={id} />
             <Link to={`/Detail/${id}`} > 
                <div>
                    <h1>{title} </h1>
                    <Image src={url} />; 
                </div>
            </Link>
                    
        </div>
    )
}

export default ListCard