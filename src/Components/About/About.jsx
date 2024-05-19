import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=> {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>에듀테크(Edutech) 소개</h3>
        <h2>에듀테크란 무엇일까요?</h2>
        <p></p>
      </div>
    </div>
  )
}

export default About
