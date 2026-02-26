import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffectP1 = () => {
    const [count,setCount]=useState(0)
    // excuter une seule fois
    useEffect(()=>{
        console.log("composante monté")
    },[])
     // excuter qaund une variable changé
     useEffect(()=>{
        console.log("Compteur modifier")
    },[count])
    
  return (
    <div className='container mt-5'>

        <h1>Compteur : {count}</h1>
        <button className='btn btn-primary' onClick={()=>setCount(count+1)}>modifier Compteur</button>

    </div>
  )
}

export default UseEffectP1