import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>제목 예시입니다.</h1>
        <p>소개 예시입니다.</p>
        <button className='btn'>버튼 클릭 <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero
