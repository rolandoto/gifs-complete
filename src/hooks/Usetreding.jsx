import React, { useEffect,useRef,useState ,Suspense} from 'react'
import '../Style-component-Global/style.css'
import useNearscreen from './useNear'
    //lay y loading 
        const  Usetreding = React.lazy(
       () =>   import('../component/Tredingsearches')
    )


export const Lazytreding =() => {
    
    const {isNearScreen,Ref} = useNearscreen({distanced:'0px'})
   
        return  (
                <Suspense fallback={'...cargando'}>
                    <div ref={Ref}>
                    {isNearScreen ? <Usetreding/> : null
                    }
                    </div>
                </Suspense>
        )
                
    }