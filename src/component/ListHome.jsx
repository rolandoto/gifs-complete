import React from 'react'
import { useContext, useState } from 'react/cjs/react.development'
import {useLocation} from 'wouter'
import UseGift from '../hooks/UseGift'
import {Link} from '@reach/router'
import UseGifContext from '../hooks/UseGifContext'
import ListCard from './ListCard'
import { Boton, Flexed, ImgWraper, Lx, White } from '../style-components/app'
import  { Lazytreding } from '../hooks/Usetreding'

const ListHome =()=> {
    
    
    const [location,setLocation] = useLocation()
    
    const {loading,setPage} =UseGift({keyword:'madara'})
    
    const {gifs} = UseGifContext()

    
    const [keywor,setKeyword] =useState('')
   
//IMPORTANTE RECORDAR COLOCAR EL CUSTO HOOKS DE GIF
    const handlsubmit =(event) =>{
        setLocation(`/gif/${keywor}`)
      }
      
      const handlinput =(e)=> {
        setKeyword(e.target.value)
      }

      //next page
      const handNextpage = () => {
          setPage(previ => previ + 1)
      }

    return(
        <div>
            <div>
                <form onSubmit={handlsubmit}>
                    <input type="text" onChange={handlinput} />
                    <input type="submit" />
                </form>
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