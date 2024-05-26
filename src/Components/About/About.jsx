import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>에듀테크(Edutech)란?</h3>
        <h2>에듀테크란 무엇일까요?</h2>
        <p>
          에듀테크란 교육(Education)과 기술(Technology)를 합성어로, 교육에 ICT
          기술을 적용함으로써 기존의 교육 서비스를 개선하거나 새로운 서비스를
          제공하는 차세대 교육을 의미하는 단어입니다.
        </p>
        <p>
          에듀테크는 면대면 학습에서 갖는 단점이라고 볼 수 있는 주입식 교육이
          아니라 단순한 지식 전수에서 문제해결능력을 기르는 데 활용될 수 있는
          장점을 지니고 있습니다. 에듀테크의 정보기술을 결합한 학습을 통해
          경험학습과 액티브러닝이 가능하고 많은 상상력과 문제해결력을 기계에
          담아 경험을 공유하게 하는 교육이라고 볼 수 있습니다. 지금까지의 교육은
          하드웨어와 소프트웨어의 구분이었다고 본다면 에듀테크의 도입은
          하드웨어와 소프트웨어의 융합이라고 볼 수 있습니다다.
        </p>
      </div>
    </div>
  );
}

export default About
