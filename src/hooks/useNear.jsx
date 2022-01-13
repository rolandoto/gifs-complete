import { useState,useEffect,useRef} from 'react'

//insertion observer
const   useNearscreen =({distanced='100px',externalRef,once=true} ={}) => {

    const [isNearScreen,setShow] = useState(false)
    const Ref = useRef()

    
    useEffect(() => {
        const element  = externalRef ?  externalRef.current : Ref.current

        let observer
        const onChange  =(entries,observer) => {
            const el = entries[0]
            if(el.isIntersecting){
                 setShow(true)                //cuando haga insertion observer i el once va hacer = true
                once &&  observer.disconnect()
               
            }else 
            setShow(false)
            !once && setShow(false)
        }   
    Promise.resolve(
        typeof IntersectionObserver === 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')

    ).then(() => {
        const  observer= new IntersectionObserver(onChange, {
            rootMargin:distanced
        })
        //si tienes el elemento si lo puedes observar
        element && observer.observe(element) 
    })
   
    //limpiar el navegador con el insertion observer
    return () => observer && observer.disconnect()
    })
    return {isNearScreen,Ref}

}

export default useNearscreen
