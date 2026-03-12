import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Item from './Item'

const CatalogueVoitures = () => {
    const [voitures,setVoitures]=useState([])
    useEffect(()=>{
        fetch("/voitures.json")
        .then(res=>res.json())
        .then(data=>setVoitures(data))

        console.log(voitures);
    },[])
  return (
    <div className='container py-5'>
       <h2 className='text-center text-danger mb-3'> Catalogue Des Voitures</h2>
        <div className="row g-3">
                {
                    voitures.map(v=>(
                        <div className="col-12 col-md-6 col-lg-4">
                                <Item key={v.id} voiture={v}/>
                        </div>                        
                         
                    ))
                }

       </div>  


    </div>
  )
}

export default CatalogueVoitures