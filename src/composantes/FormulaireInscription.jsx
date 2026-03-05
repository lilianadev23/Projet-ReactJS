import React from 'react'
import { useState } from 'react'

const FormulaireInscription = () => {
    const [errors,setErrors]=useState({})
    const [userData,setUserData]=useState(null)
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
    // validation
    const validate=()=>{
        let newErrors={};
        if(!formData.nom) newErrors.nom="Nom obligatoire";
        if(!formData.prenom) newErrors.prenom="prenom obligatoire";
        if(!formData.email) {
        newErrors.email="Email obligatoire";
        }else if(!/^\S+@\S+\.\S+$/.test(formData.email)){
            newErrors.email="Email invalid";
        }
        if(!formData.ville) newErrors.ville="Ville obligatoire";
        if(!formData.conditions) newErrors.conditions="Vous devez accepter les conditions";

        return newErrors;

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const validationErrors=validate();
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length===0){
            setUserData(formData);            
        }
        
    }
  return (
    <div className='container mt-5 shadow p-3'>
        <h2 className="mb-4 text-center text-danger">Formulaire d'inscription</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <input type="text" className="form-control" placeholder='Nom' name='nom' value={formData.nom} onChange={handleChange} />
            {errors.nom &&  <small className='text-danger'>{errors.nom}</small>}
           
            </div>
            <div className="mb-3">
            <input type="text" className="form-control" placeholder='Prénom'
            name='prenom' value={formData.prenom} onChange={handleChange} />
             {errors.prenom &&  <small className='text-danger'>{errors.prenom}</small>}
            </div>
            <div className="mb-3">
            <input type="email" className="form-control" placeholder='Email'
            name='email' value={formData.email} onChange={handleChange} />
               {errors.email &&  <small className='text-danger'>{errors.email}</small>}
            </div>
            <div className="mb-3">
                <select  className="form-select" name='ville' value={formData.ville} onChange={handleChange}>
                    <option value="">Choisir Ville </option>
                    <option value="Rabat">Rabat</option>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Kenitra">Kenitra</option>
                    <option value="Autre">Autre</option>
                </select>
                {errors.ville &&  <small className='text-danger'>{errors.ville}</small>}
            </div>
            <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input"
                name='conditions' checked={formData.conditions} onChange={handleChange}
                
                />
                <label className="form-chek-label"> J'accepte les conditions</label>
                {errors.conditions &&  <div className='text-danger'>{errors.conditions}</div>}
            </div>
            <div className="btn-group w-75">
                <button className='btn btn-primary w-50'> Valider </button>
                <button className='btn btn-danger w-50'> Annuler </button>
            </div>
        
            
        </form>
        {userData &&  (<div className="card mt-5 shadow">
            <div className="card-body">
                <h4 className="card-title">Informations sasies</h4>
                <p>Nom : {userData.nom}</p>
                <p>Prénom : {userData.prenom}</p>
                <p>Email : {userData.email}</p>
                <p>Ville : {userData.ville}</p>
            </div>

        </div>)}
        

    </div>
  )
}

export default FormulaireInscription