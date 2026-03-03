import React from 'react'
import { useState } from 'react'

const FormulaireInscription = () => {
    const [formData,setFormData]=useState({
        nom:"",
        prenom:"",
        email:"",
        ville:"",
        conditions:false
    });
    const handleChange =(e)=>{
        const {name, value, type,checked}=e.target;
        setFormData({
            ...formData,
            [name]:type==="checkbox" ? checked:value
        }) 
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
    }
  return (
    <div className='container mt-5'>
        <h2 className="mb-4">Formulaire d'inscription</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <input type="text" className="form-control" placeholder='Nom' name='nom' value={formData.nom} onChange={handleChange} />
            </div>
            <div className="mb-3">
            <input type="text" className="form-control" placeholder='Prénom'
            name='prenom' value={formData.prenom} onChange={handleChange} />
            </div>
            <div className="mb-3">
            <input type="email" className="form-control" placeholder='Email'
            name='email' value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <select  className="form-select" name='ville' value={formData.ville} onChange={handleChange}>
                    <option value="">Choisir Ville </option>
                    <option value="Rabat">Rabat</option>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Kenitra">Kenitra</option>
                    <option value="Autre">Autre</option>
                </select>
            </div>
            <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input"
                name='conditions' checked={formData.conditions} onChange={handleChange}
                
                />
                <label className="form-chek-label"> J'accepte les conditions</label>
            </div>
            <button className='btn btn-primary'> Valider </button>
        
            
        </form>

    </div>
  )
}

export default FormulaireInscription