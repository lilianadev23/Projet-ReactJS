import React from 'react'
import './Content.css'
import arrow from '../../assets/arrow_btn.png'
import pause from '../../assets/pause_icon.png'
import play from '../../assets/play_icon.png'


const Content = ({contentCount,setContentCount,videoStatus,setVideoStatuts,contentdata}) => {
  return (
    <div className="content">
          <div className='content-text'>
            <p>{contentdata.titre1}</p>
            <p>{contentdata.titre2}</p>
          </div>
          <div className='content-lire'>
            <p>Découvrire notre Gamme</p>
            <img src={arrow} alt="" />            
          </div>
          <div className='content-explore'>
              <ul className='btn-actions'>
                <li className='btn-action'></li>
                <li className='btn-action'></li>
                <li className='btn-action'></li>
              </ul>           
          
                <div className='content-play'>
                    <img src={videoStatus ? pause : play} alt="" /> 
                    <p>Voir Video</p>          
                </div>
          </div>
    </div>
  )
}

export default Content