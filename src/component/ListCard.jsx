import React, { Fragment } from 'react'
import {Link} from '@reach/router'

import { FLeximage,Image } from '../style-components/app'
import Fav from './Fav'

const   ListCard =({id,title,url}) => {

  return (
        <div className='to'>
            <Fav id={id} />
             <Link to={`/Detail/${id}`} > 
                <div>
                    <img src={url} alt="" />
                </div>
            </Link>
                    
        </div>
    )
}

export default ListCard