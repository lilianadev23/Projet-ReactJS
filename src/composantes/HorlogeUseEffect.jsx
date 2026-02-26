import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const HorlogeUseEffect = () => {
    const [heure,setHeure]=useState(new Date())


    useEffect(() => {
        const timer=setInterval(()=> {
            setHeure(new Date())
            console.log("ok")
        },1000)

        // Noteyage de timer
        return ()=>clearInterval(timer)

    },[])
  return (
    <div className='container mt-5'>
    <div className="alert alert-primary">
        <h2>Horloge : {heure.toLocaleTimeString()} </h2>
    </div>
    
    </div>
  )
}

export default HorlogeUseEffect