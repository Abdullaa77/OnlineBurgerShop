import React from 'react';
import './Header.css'
import logo from '../../assets/img/107512d9-2b38-4f4d-a4b6-ef4a6832c72e.svg'
import pic from '../../assets/img/pic (1).svg'
function Header(props) {
    return (
      <header>
        <a href="#!" className="logo">
          <img src={logo} alt="" />
        </a>
        <div className="bottom">
          <img src={pic} alt="" />
          <div className="right">
            <h1>
              Только самые <span>сочные бургеры!</span>
            </h1>
            <p>Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </header>
    );
}

export default Header;