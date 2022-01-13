import React from 'react'
import { useContext, useState,useCallback} from 'react/cjs/react.development'
import {useLocation} from 'wouter'
import UseGift from '../hooks/UseGift'
import ListCard from './ListCard'
import { Boton, ImgWraper,Lx} from '../style-components/app'
import  { Lazytreding } from '../hooks/Usetreding'
import FormSeach from './FormSearch'
import Usetitle from '../hooks/useTitle'
import UseGifContext from '../hooks/UseGifContext'
import UseSearch from '../hooks/UseSearch'

const ListHome =()=> {

   
    const {loading,setPage} =UseGift({keyword:'madara'})
    

    const {gifs}=  UseGifContext()
    
    //IMPORTANTE RECORDAR COLOCAR EL CUSTO HOOKS DE GIF
   
      //next page
      const handNextpage = () => {
          setPage(previ => previ + 1)
      }
        
    return(
        <div>
            <div>
                <FormSeach   />
                </div>
                {loading ? 
                 <h1>cargando</h1>  
                  :
                 <div>
                     <Lx>
                    {gifs.map((res) =>(
                        <ImgWraper>
                            <ListCard key={res.id} {...res} />
                       </ImgWraper>
                    ))}
                    </Lx>
                </div>
                } 
            <div>
                <Lazytreding />
            </div>
                
            <div>
                <Boton onClick={handNextpage}>Next page</Boton>
            </div>
        </div>
    )
}
export default ListHome