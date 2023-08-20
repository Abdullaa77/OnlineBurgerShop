import React from "react";
import "./Footer.css";
import logo from "../../assets/img/Group 7.svg";
import phone from "../../assets/img/Call.svg";
import wkicon from "../../assets/img/entypo-social_vk-with-circle.svg";
import tgicon from "../../assets/img/bi_telegram.svg";
function Footer(props) {
  return (
    <footer>
      <div className="left">
        <img className="logo" src={logo} alt="" />
        <p>© YouMeal, 2022 Design: Anastasia Ilina</p>
      </div>
      <div className="right">
        <div className="contact">
          <h1>Номер для заказа</h1>
          <p>
            <img src={phone} alt="" />
            +7(930)833-38-11
          </p>
        </div>
        <div className="social">
          <h1>Мы в соцсетях</h1>
          <span><img src={wkicon} alt="" /><img src={tgicon} alt="" /></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
