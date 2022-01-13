import React,{useState} from "react";
import UseUsers from "../hooks/UseUsers";
import Login from "./Login";
import Modal from './Modal'
const Fav =({id}='rolando')=>{
    console.log(id)
    const {isLoggedIn,AddFavs,favs,DelteFavs} = UseUsers()
    const  [showModal,setShowModal] = useState(false)

  
    //aqui me envia un true si lo encuentra
    const isFave = favs.some(index => index == id)
    console.log(isFave)
    const handclickFav =()=>{
        if(!isLoggedIn) return setShowModal(true)
        AddFavs({id})
        if(isFave){
            DelteFavs({id})
         }
    }

    const handleClose =() =>{
        setShowModal(false)
    }

    const [label,
        emoji] = isFave 
        ? [
            'remove  gif from favorites','❌'
         ]: [
             'Add  gif  to favorites','❤️'
            ]
            
    return ( 
        <div>
             <button onClick={handclickFav} className='button-fav'>
                <span aria-label={label} role='img'>{emoji} </span>
             </button> 
            {showModal && <Modal onClose={handleClose} ><Login/> </Modal>}
        </div>  
    )
}

export default Fav