import React from 'react'
import './Modal.css'
import ReactDOM from 'react-dom'


const Modal =({children,onClose})=>{
    return(
        <div  className='Modal'>
            <div className='content-Modal' >  
                <button className='btn' onClick={onClose} >❌ </button>
                 {children}
            </div>
        </div>
    )
}

const ModalMortal = ({children,onClose}) => {
    return ReactDOM.createPortal(
            <Modal onClose={onClose} >
                {children}
            </Modal>,
            document.getElementById('createPortal')
    )    
}
export default ModalMortal
