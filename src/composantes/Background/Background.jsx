import React from 'react'
import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({contentCount,videoStatus}) => {
  if (videoStatus) {
    return (
      <video className='background' autoPlay loop muted>
        <source src={video1} />
      </video>
    )    
  }else if (contentCount===0) {

    return <img src={image1}  className='background'  alt="image 1" />
  } else if (contentCount===1) {

    return <img src={image2}  className='background'  alt="image 2" />
  } else{
      return <img src={image3}  className='background'  alt="image 3" />   
  }

}

export default Background