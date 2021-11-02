import React, { Fragment } from 'react'
import {Link} from '@reach/router'

import { FLeximage,Image } from '../style-components/app'

const   ListCard =({id,title,url}) => {

  return (
        <div>
            <Link to={`/DetailDefault/${id}`} >
                <div key={id}>
                    <h1>{title} </h1>
                <Image src={url} />;
                </div>
            </Link>
        </div>
    )
}

export default ListCard