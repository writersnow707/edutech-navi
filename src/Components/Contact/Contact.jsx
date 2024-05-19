import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("보내는 중....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b6d2c866-90dc-447a-aba9-5c3aae2fe568");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("메세지를 성공적으로 보냈습니다!");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult("전송 오류... 다시 시도해 보세요.");
    }
  }


  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          연락처<img src={msg_icon} alt="" />
        </h3>
        <p>준비 중입니다.</p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            writersnow707@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +82 010-9963-6447
          </li>
          <li>
            <img src={location_icon} alt="" />
            전북특별자치도 군산시 수송동로 100, 세영리첼아파트
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>이름</label>
          <input
            type="text"
            name="이름"
            placeholder="이름 입력"
            required
          />
          <label>이메일</label>
          <input
            type="text"
            name="이메일"
            placeholder="이메일 입력"
            required
          />
          <label>하고 싶으신 말을 보내주세요!</label>
          <textarea
            name="메세지"
            rows="6" placeholder="메세지 입력"
            required
          />
          <button type='submit' className='btn dark-btn'>보내기<img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact
