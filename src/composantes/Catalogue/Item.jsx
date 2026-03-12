import React from 'react'

const Item = ({voiture}) => {
  const imagePath= new URL(
    `../../assets/images/${voiture.image}`,
    import.meta.url
  ).href;
  
  return (
    <div className='card'>
        <div className="card-header">
        <img src={imagePath} alt={voiture.modele} className="img-fluid" />
        </div>
        <div className="card-body shadow">
            <h3>{voiture.marque} {voiture.modele}</h3>
            <p>Prix : {voiture.prixJour} DH / jour</p>

        </div>
        <div className="card-footer">
            {
                voiture.disponible ? 
                ( <button className="btn btn-primary w-100">Louer Voiture</button> )
                :
                (<button className="btn btn-danger w-100" disabled>Non disponible</button>)
            }
        </div>
        

    </div>
  )
}

export default Item