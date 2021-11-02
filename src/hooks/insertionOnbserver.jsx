import { useEffect, useState,useRef } from 'react'

const UseScrean =() =>  { 
    
    //insertion observer
    const [show,setShow] = useState(false)
    const element = useRef(null)

    useEffect(() =>{
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined'
            ?
            window.IntersectionObserver
        : import('intersection-observer')
            )
        .then(() =>{
            const observer = new window.IntersectionObserver(function(entries ){
                //esto se encarga de observar los articulos cuando lo miramos
                //ya sea con el scroll cunado estemos vahando en el mouse
                   const {isIntersecting} = entries[0]
                   console.log({isIntersecting})
                   if(isIntersecting){
                       console.log('si')
                       setShow(true) 
                       observer.disconnect()
                   }else{
                       console.log('no')
                       setShow(false)
                   }
               })
                   observer.observe(element.current)
        })  
    },[element])
    return {show,element}
}

export default UseScrean