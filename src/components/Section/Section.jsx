import React, { useEffect, useState } from "react";
import "./Section.css";
import ctgry1 from "../../assets/img/free-icon-cheeseburger-2362255.png";
import ctgry2 from "../../assets/img/free-icon-onion-2362361.png";
import ctgry3 from "../../assets/img/free-icon-hotdog-sandwich-2362313.png";
import ctgry4 from "../../assets/img/free-icon-fast-food-2362274.png";
import ctgry5 from "../../assets/img/free-icon-burrito-2362225.png";
import ctgry6 from "../../assets/img/free-icon-pizza-2362372.png";
import ctgry7 from "../../assets/img/free-icon-noodles-2362350.png";
import ctgry8 from "../../assets/img/free-icon-doughnut-2362260.png";
import ctgry9 from "../../assets/img/free-icon-ketchup-2362341.png";
import poncik from "../../assets/img/pic.svg";
import delivery from "../../assets/img/free-icon-delivery-2362252.png";
import close from "../../assets/img/close.svg";
import notchkd from "../../assets/img/Group 9.svg";
import checked from "../../assets/img/Group 10.svg";
import { data, titledata } from "../../ProductData";
import { data2, titledata2 } from "../../data2";
import { data3, titledata3 } from "../../data3";

function Section(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showmodal, setShowmodal] = useState(false);
  const [datas, setDatas] = useState(data);
  const [basket, setBasket] = useState([]);
  const [emptyBasket, setEmptyBasket] = useState(true);
  const [samavivoz, setSamavivoz] = useState(false);
  const [titledatas, setTitledatas] = useState(titledata);
  const handleBoxClick = (index, datavalue, titlevalue) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
    setTitledatas(titlevalue);
    setDatas(datavalue);
  };
  const handleAddToBasket = (item) => {
    const existingItem = basket.find((basketItem) => basketItem.id === item.id);

    if (existingItem) {
      const updatedBasket = basket.map((basketItem) =>
        basketItem.id === item.id
          ? { ...basketItem, count: basketItem.count + 1 }
          : basketItem
      );
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
    setEmptyBasket(false);
  };
  const getTotalItemCount = () => {
    return basket.reduce((total, item) => total + item.count, 0);
  };
  const getTotalPrice = () => {
    return basket.reduce((total, item) => total + item.price * item.count, 0);
  };
  const handleDecreaseQuantity = (item) => {
    const existingItem = basket.find((basketItem) => basketItem.id === item.id);

    if (existingItem && existingItem.count > 1) {
      const updatedBasket = basket.map((basketItem) =>
        basketItem.id === item.id
          ? { ...basketItem, count: basketItem.count - 1 }
          : basketItem
      );
      setBasket(updatedBasket);
    } else {
      const filteredBasket = basket.filter(
        (basketItem) => basketItem.id !== item.id
      );
      setBasket(filteredBasket);
    }
  };
  useEffect(() => {
    if (basket.length === 0) {
      setEmptyBasket(true);
    }
  }, [basket]);
  console.log();
  return (
    <section>
      {showmodal ? (
        <div className="modaldelivery">
          {samavivoz ? (
            <div className="modalsam">
              <div className="left">
                <img src={poncik} alt="" />
              </div>
              <div className="right">
                <div className="top">
                  <h1>Доставка</h1>
                  <img src={close} alt="" onClick={() => setShowmodal(false)} />
                </div>
                <form action="">
                  <input type="text" placeholder="Ваше имя" />
                  <input type="text" placeholder="Телефон" />
                  <div className="checkbox">
                    <div className="st">
                      <img src={checked} alt="" />
                      <p>Самовывоз</p>
                    </div>
                    <div onClick={() => setSamavivoz(false)} className="nd">
                      <img src={notchkd} alt="" />
                      <p>Доставка</p>
                    </div>
                  </div>
                </form>
                <button>Оформить</button>
              </div>
            </div>
          ) : (
            <div className="modaldel">
              <div className="left">
                <img src={poncik} alt="" />
              </div>
              <div className="right">
                <div className="top">
                  <h1>Доставка</h1>
                  <img src={close} alt="" onClick={() => setShowmodal(false)} />
                </div>
                <form action="">
                  <input type="text" placeholder="Ваше имя" />
                  <input type="text" placeholder="Телефон" />
                  <div className="checkbox">
                    <div onClick={() => setSamavivoz(true)} className="st">
                      <img src={notchkd} alt="" />
                      <p>Самовывоз</p>
                    </div>
                    <div className="nd">
                      <img src={checked} alt="" />
                      <p>Доставка</p>
                    </div>
                  </div>
                  <input type="text" placeholder="Улица, дом, квартира" />
                  <div className="short">
                    <input type="text" placeholder="Этаж" />
                    <input type="text" placeholder="Домофон" />
                  </div>
                </form>
                <button>Оформить</button>
              </div>
            </div>
          )}
        </div>
      ) : null}
      <div className="category">
        <div
          className={`box ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => handleBoxClick(0, data, titledata)}
        >
          <img src={ctgry1} alt="" />
          <p>Бургеры</p>
        </div>
        <div
          className={`box ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => handleBoxClick(1, data2, titledata2)}
        >
          <img src={ctgry2} alt="" />
          <p>Закуски</p>
        </div>
        <div
          className={`box ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => handleBoxClick(2, data3, titledata3)}
        >
          <img src={ctgry3} alt="" />
          <p>Хот-доги</p>
        </div>
        <div
          className={`box ${activeIndex === 3 ? "active" : ""}`}
          onClick={() => handleBoxClick(3, data, titledata)}
        >
          <img src={ctgry4} alt="" />
          <p>Комбо</p>
        </div>
        <div
          className={`box ${activeIndex === 4 ? "active" : ""}`}
          onClick={() => handleBoxClick(4, data, titledata)}
        >
          <img src={ctgry5} alt="" />
          <p>Шаурма</p>
        </div>
        <div
          className={`box ${activeIndex === 5 ? "active" : ""}`}
          onClick={() => handleBoxClick(5, data, titledata)}
        >
          <img src={ctgry6} alt="" />
          <p>Пицца</p>
        </div>
        <div
          className={`box ${activeIndex === 6 ? "active" : ""}`}
          onClick={() => handleBoxClick(6, data, titledata)}
        >
          <img src={ctgry7} alt="" />
          <p>Вок</p>
        </div>
        <div
          className={`box ${activeIndex === 7 ? "active" : ""}`}
          onClick={() => handleBoxClick(7, data, titledata)}
        >
          <img src={ctgry8} alt="" />
          <p>Десерты</p>
        </div>
        <div
          className={`box ${activeIndex === 8 ? "active" : ""}`}
          onClick={() => handleBoxClick(8, data, titledata)}
        >
          <img src={ctgry9} alt="" />
          <p>Соусы</p>
        </div>
      </div>
      <div className="bottom">
        <div className="basket">
          {emptyBasket ? (
            <div className="empty">
              <div className="top">
                <h1>Корзина</h1>
                <span>0</span>
              </div>
              <p>Тут пока пусто :(</p>
            </div>
          ) : (
            <div className="noempty">
              <div className="top">
                <h1>Корзина</h1>
                <span>{getTotalItemCount()}</span>
              </div>
              <div className="basketProdct">
                {basket.map((element) => {
                  return (
                    <>
                      <div className="basketBox" key={element.id}>
                        <div className="left">
                          <img src={element.image} alt="" />
                          <div className="text">
                            <p>{element.name}</p>
                            <span>{element.gramm}</span>
                            <p>{element.price}₽</p>
                          </div>
                        </div>
                        <div className="counts">
                          <p onClick={() => handleDecreaseQuantity(element)}>
                            -
                          </p>
                          <p>{element.count}</p>
                          <p onClick={() => handleAddToBasket(element)}>+</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="basketBottom">
                <div className="totalPrice">
                  <p>Итого</p>
                  <p>{getTotalPrice()}₽</p>
                </div>
                <button onClick={() => setShowmodal(true)}>
                  Оформить заказ
                </button>
                <p className="deli">
                  <img src={delivery} alt="" />
                  Бесплатная доставка
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="products">
          {titledatas.map((element) => {
            return (
              <>
                <h1 className="title">{element.title}</h1>
              </>
            );
          })}
          <div className="productRow">
            {datas.map((element) => {
              return (
                <>
                  <div className="box" key={element.id}>
                    <img
                      src={element.image}
                      alt="product"
                      className="product"
                    />
                    <p className="price">{element.price}₽</p>
                    <p className="name">{element.name}</p>
                    <span className="gramm">{element.gramm}</span>
                    <button onClick={() => handleAddToBasket(element)}>
                      Добавить
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
