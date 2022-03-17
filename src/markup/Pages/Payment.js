import React from 'react'
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Card from '../../images/visa.png';

const Payment = () => {

    return (
        <div>
            <Header />
            <div className="payment">
                <div className="side-panel"></div>
                <div className="payment-right">
                    <p className="payment-right__title">Онлайн оплата</p>
                    <div className="payment-right__description">
                        Уважаемые туристы, просим оплачивать тур только после подтверждения у
                        менеджера компании! Прежде чем оплатить тур онлайн, ознакомьтесь с
                        Правилами реализации туристических услуг.<br />
                        Оплатив тур, я подтверждаю, что полностью ознакомился с данными
                        правилами и согласен с ними!
                    </div>
                    <div className="payment-right__data">
                        <p className="data__title">
                            Для оплаты введите ваши данные и выберите удобный для Вас способ
                            оплаты:
                        </p>
                        <section className="data__pay">
                            <ul className="pay__input">
                                <li className="input__item">
                                    <p className="input__name">ФИО:</p>
                                    <input
                                        className="input__input-line"
                                        type="text"
                                        name="FIO"
                                        value="Иванов Иван Иванович"
                                    />
                                </li>
                                <li className="input__item">
                                    <p className="input__name">Телефон:</p>
                                    <input
                                        className="input__input-line"
                                        type="text"
                                        name="Phone"
                                        value="+78005553535"
                                    />
                                </li>
                                <li className="input__item">
                                    <p className="input__name">E-mail:</p>
                                    <input
                                        className="input__input-line"
                                        type="text"
                                        name="E-mail"
                                        value="explain@mail.ru"
                                    />
                                </li>
                                <li className="input__item">
                                    <p className="input__name">Услуга:</p>
                                    <input
                                        className="input__input-line"
                                        type="text"
                                        name="service"
                                        value="Тур"
                                    />
                                </li>
                                <li className="input__item">
                                    <p className="input__name">Сумма:</p>
                                    <input
                                        className="input__input-line"
                                        type="text"
                                        name="toal"
                                        value="3200"
                                    />
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="payment-right__cards">
                        <div className="cards__card">
                            <input
                                className="input__input-radio"
                                type="radio"
                                name="Card"
                                value=""
                            />
                            <img src={Card} alt="" className="card" />
                            <section className="card__info">
                                <p className="info__title">Карта Visa</p>
                                <p className="info__text">
                                    Оплата пластиковыми картами Visa. Приём платежей обеспечивает АО
                                    «Банк Русский Стандарт».
                                </p>
                            </section>
                        </div>
                        <div className="cards__card">
                            <input
                                className="input__input-radio"
                                type="radio"
                                name="Card"
                                value=""
                            />
                            <img src={Card} alt="" className="card" />
                            <section className="card__info">
                                <p className="info__title">Карта Visa</p>
                                <p className="info__text">
                                    Оплата пластиковыми картами Visa. Приём платежей обеспечивает АО
                                    «Банк Русский Стандарт».
                                </p>
                            </section>
                        </div>
                    </div>
                    <button className="pay__button">Оплатить</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Payment;