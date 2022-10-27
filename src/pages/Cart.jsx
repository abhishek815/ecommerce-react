import React from 'react';

const Cart = ({ books }) => {
    return (
        <div className="div" id="books__body">
            <main id="books_main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">
                                Cart
                            </h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <div className="cart__book">Book</div>
                                <div className="cart__quantity">Quanitity</div>
                                <div className="cart__total">Proce</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;
