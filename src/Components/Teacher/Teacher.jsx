import React, { useRef } from "react";
import back_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import "./Teacher.css";

const Teacher = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div class="teacher">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>이동기</h3>
                  <span>전북특별자치도 군산시</span>
                </div>
              </div>
              <p>
                1999년 9월 18일 대전 출생, 군산고등학교를 졸업하고 2024년 현재
                군산대학교 컴퓨터정보공학과 4학년에 재학중입니다. 현재
                교직과정을 통해 교육학 관련 내용도 학습하고 있습니다.
              </p>
              <br></br>
              <p>
                미래의 학생들을 위해 좋은 가르침을 주고자 교사를 꿈꾸게 되었으며
                현재 졸업준비와 더불어 중등임용시험을 준비중에 있습니다.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>윤**</h3>
                  <span>충청북도 청주시</span>
                </div>
              </div>
              <p>
                199*년 *월 *일 충청북도 청주 출생, 청주외국어고등학교를 졸업하고
                20**년 한국교원대학교 초등교육과를 졸업했습니다.
              </p>
              <br></br>
              <p>
                졸업과 동시에 초등임용시험에 합격하였으며, 현재 충청북도 소속
                초등학교 교사로 근무중입니다.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>김**</h3>
                  <span>세종특별자치시</span>
                </div>
              </div>
              <p>
                199*년 *월 *일 충청남도 천안 출생, 공주대학교 사범대학
                부설고등학교를 졸업하고 20**년 한국교원대학교 가정교육과를
                졸업했습니다.
              </p>
              <br></br>
              <p>
                졸업과 동시에 중등임용시험에 합격하였으며, 현재
                세종특별자치시에서 가정교사로 근무중입니다.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>unknown</h3>
                  <span>unknown</span>
                </div>
              </div>
              <p>textline example</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Teacher;
