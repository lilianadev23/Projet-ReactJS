import React from 'react'

const Partie1Usestate = () => {
    const [count,setCount]=useState(0)
  const [nom,setNom]=useState("")
  const [visible,setVisible]=useState(false)
  const incrementer=()=>{
    setCount(count+1)
  }
  const decrementer=()=>{
    setCount(count+1)
  }
  return (
    <>
        <div className="container  mt-5 ">
        <div className="card">
            <div className="card-header fw-bold fs-3 bg-danger text-white">Compteur : number</div>
            <div className="card-body d-flex justify-content-center gap-3">
            <button className="btn btn-primary fw-bold" onClick={incrementer}> + </button>
          <h2>Compteur :
            <span className="ms-3">{count}</span>        
            </h2>     
          <button className="btn btn-success  fw-bold" onClick={decrementer}>-</button>
            </div> 
            </div>
        
        </div>
        <div className="container mt-5">
          <div className="card">
            <div className="card-header bg-dark text-white fw-bold fs-3">Gestion Input : String</div>
            <div className="card-body">
            <input type="text" 
        className="form-control w-50"
        placeholder="Entrer Votre Nom SVP"
        onChange={(e)=>setNom(e.target.value)} />
          <h2>Bonjour 
            <span className="ms-3">{nom}</span>        
            </h2>
            </div>
          </div>
            
        
        </div>
        <div className="container mt-5 p-4">
          
          <div className="card">
          <div className="card-header bg-primary text-white fw-bold fs-3">
            Toggle : booleen
          </div>
            <div className="card-body">
              <button className="btn btn-primary"
              onClick={()=>setVisible(!visible)}>Afficher / Masquer</button>
              {visible && <p className="alert alert-danger mt-3">Contenu visible</p>}
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Partie1Usestate