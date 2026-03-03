import React from 'react'
import { useState } from 'react'

const Formulaire1 = () => {
    
    const [ischeked,SetIscheked]=useState(true);
    const [ville,setVille]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("condition : " + ischeked + "\n Ville : " + ville )
    }
   
  return (
    <div className="container mt-5">
      <h2 className="mb-3 text-center">Création Compte Utilisateur</h2>

      <form  onSubmit={handleSubmit}>
        <div class="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="condition"
            checked={ischeked}
            onChange={(e) => SetIscheked(e.target.checked)}
          />{" "}
          <label class="form-check-label" for="checkDefault">
            Accepter les conditions
          </label>
        </div>
        <select class="form-select" aria-label="Default select example" value={ville} onChange={(e)=>setVille(e.target.value)}>
          <option selected>Chisir une ville</option>
          <option value="Rabat">Rabat</option>
          <option value="2">Kenitra</option>
          <option value="3">casablanca</option>
        </select>

        <button className="btn btn-primary w-100" type="submit">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Formulaire1