import React from 'react'
import { useRef } from 'react'

const UserRef1 = () => {
    const inputRef=useRef();
    const nomRef=useRef();
    const focusInput=()=>{
        inputRef.current.focus();
    }
    const handleValeur=()=>{
        alert(nomRef.current.value)
        
    }
  return (
    <div className='container mt-5 p-3 shadow'>
        <input type="text" className="form-control mb-3" placeholder='Votre nom' ref={nomRef}  />
        <input type="text" className="form-control mb-3" placeholder='Votre prenom' />
        <input type="text" className="form-control mb-3" placeholder='Votre email' />
        <input type="text" className="form-control mb-3" placeholder='Votre pays' ref={inputRef} />
        <input type="text" className="form-control mb-3" placeholder='Votre ville' />
        <button onClick={focusInput} className='btn btn-primary mt-3'>
            Focus sur input
        </button>
        <button onClick={handleValeur} className='btn btn-primary mt-3'>
            Afficher la valeur
        </button>


    </div>
  )
}

export default UserRef1