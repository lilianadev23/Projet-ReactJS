import React from 'react'

const Formulaire0 = () => {
    const [formData,setFormData]=useState({
        nom:"",
        email:"",
        password:"",
        
    });
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
      
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Nom saisi : " + formData.nom + "\n Email saisi : " + formData.email + "\n Mot de passe saisi : " + formData.password)
    }
  return (
    <div className='container mt-5'>
    <h2 className='mb-3 text-center'>Création Compte Utilisateur</h2>
    
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        className='form-control mb-3'
        name='nom'
        placeholder='votre Nom complet'
        value={formData.nom}
        onChange={handleChange}
        />
          <input 
        type="email" 
        className='form-control mb-3'
        name='email'
        placeholder='votre adresse email'
        value={formData.email}
        onChange={handleChange}
        />
          <input 
        type="password" 
        className='form-control mb-3'
        name='password'
        placeholder='votre Mot de passe'
        value={formData.password}
        onChange={handleChange}
        />
        
        
     
        <button className="btn btn-primary w-100" type='submit'>S'inscrire</button>
    </form>
    <div class="form-check">
        <input type="checkbox" className='form-check-input'
        name='condition'
        checked={ischeked}
         /> <label class="form-check-label" for="checkDefault">
         Accepter les conditions
       </label>
       </div>
</div>
  )
}

export default Formulaire0