import { useRef,useEffect } from "react"


const Usetitle =({title,description}) =>{
  
   const preveTitle = useRef(document.title)
   const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))
   
    useEffect(() =>{
        const previusTitle = preveTitle.current
        if(title){
          document.title = `${title} | Gif`
        }
        //cuando se desmonte el previus le va a pasar el previusTitle
        //que tenia  
        return ()=> document.title = previusTitle
    },[title])
    
    useEffect(()=>{
      const previusDescription = prevDescription.current
      const Metadescription = document.querySelector('meta[name="description"]')
       if(description){
         Metadescription.setAttribute('content',description)
       }


       return ()=> Metadescription.setAttribute('content',previusDescription)
    },[description])

    
   
   }

export default Usetitle