import React, { useState } from "react";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Teacher from "./Components/Teacher/Teacher";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title
          subTitle="나비 툴킷(NAVI-TOOLKIT) 소개"
          title="학생들의 학습을 도와주는 에듀테크"
        />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="갤러리" title="우리의 교실 이미지 모음" />
        <Gallery />
        <Title subTitle="도우미" title="어떤 선생님들이 계신가요?" />
        <Teacher />
        <Title subTitle="문의하기" title="여러분의 의견을 전달해주세요!" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
