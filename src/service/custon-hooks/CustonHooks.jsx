import { useState } from "react/cjs/react.development"

 const CustonHooks = () => {
    const [counter,setCounter] =useState(0)
    const [name,setName] =useState('')
    
    const increment =()=>  {
        setCounter(counter+1)
    }
    const decrement =() =>{
        setCounter(counter -1)
    }

    const reset =()=>{
        setCounter(0)
    }

    const inputadd =(e) => {
        setName(e.target.value)
    }
    //de la manera que ud exporte todos los custon hooks y asi de reciben [] =[] o {} = {}

    return {counter,
            increment,
            decrement,
            reset,
            inputadd,
            name
        }
}
export default CustonHooks