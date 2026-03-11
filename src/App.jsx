import { Fragment } from "react"

import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import Background from './composantes/Background/Background'
import Navbar from './composantes/Navabar/Navbar'
import Content from './composantes/Content/Content'

function App() {
    let contentdata=[
      {titre1:"Louez la voiture idéale",titre2:"Confort, sécurité et prix abordables pour tous vos déplacements"},
      {titre1:"Votre voyage commence ici",titre2:"Des voitures modernes pour toutes vos aventures"},
      {titre1:"Roulez en toute liberté",titre2:"Location simple, rapide et au meilleur prix"}
    ];
    const [contentCount,setContentCount]=useState(0);
    const [videoStatus,setVideoStatuts]=useState(false);
  
  return (
    
    <div>
      <Background contentCount={contentCount} videoStatus={videoStatus}  />
      <Navbar />
      <Content 
      contentCount={contentCount}
      setContentCount={setContentCount}
       videoStatus={videoStatus}
       setVideoStatuts={setVideoStatuts}
       contentdata={contentdata[contentCount]}

       
       />
    </div>
  );
}


export default App
