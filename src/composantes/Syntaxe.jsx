import React from 'react'
const name="SARA ALAMI"
const style={color:'red',backgroundColor:'black'}
const showTitle=true
const taches=[
  'Presenter Produit',
  'Negocier le Prix',
  'Conclure Vente',
  'Presenter Produit',
  'Negocier le Prix',
  'Conclure Vente'
]
const Syntaxe = () => {
    const handleClick=()=>{
        alert("J'ai cliqué sur le Titre")
      }
  return (
    <>
   
    <Titre color="red"  id="btn" data-demo="demo"></Titre>
    {showTitle ? <h1
        id="title"
        className=""
        style={style}
        onClick={handleClick} 
      >
        Bonjour {name}
      </h1> : <p> Demo</p> }
      
      <input type="text" placeholder="votre nom" />
      <Titre />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum
        magni iure commodi minus, natus quae placeat vel soluta nam.
      </p>
      <li></li>
      <ul>
        {taches.map(element=>(<li key={element}>{element}</li>))}
      </ul>
    </>
  )
}
function Titre({color,...props}) {

 
    return  <h1 style={{color:color}} {...props}>Formation React JS</h1>
  }
export default Syntaxe