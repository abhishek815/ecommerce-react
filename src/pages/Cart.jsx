import React from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from '../assets/empty_cart.svg'
const Cart = ({ books, cart, changeQuantity, removeBook }) => {
    
    const total = () => {
        let sum = 0
        cart.forEach(book => {
            sum += book.quantity * (book.salePrice || book.originalPrice)
        });
        return sum.toFixed(2)
    }


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
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quanitity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(book => {
                                        return(
                                        <div className="cart__item" key={book.id}>
                                            <div className="cart__book">
                                                <img src={book.url} alt="" className="cart__book--img" />
                                                <div className="cart__book--info">
                                                    <span className="cart__book--title">
                                                        {book.title}
                                                    </span>
                                                    <span className="cart__book--price">${(book.salePrice || book.originalPrice).toFixed(2)}</span>
                                                    <button className="cart__book--remove" onClick={() => removeBook(book)}>Remove</button>
                                                </div>
                                            </div>
                                            <div className="cart__quantity">
                                                <input className='cart__input' type="number" min={0} max={99} value={book.quantity} onChange={(event) => changeQuantity(book, event.target.value)}/>
                                            </div>
                                            <div className="cart__total">
                                                ${(book.quantity * (book.salePrice || book.originalPrice)).toFixed(2)}
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                            {cart.length === 0 &&
                            <div className="cart__empty">
                                <img src={EmptyCart} alt="" className="cart__empty--img" />
                                <h2>You don't have any books in your cart!</h2>
                                <Link to="/books"><button className="btn">Browse Books</button></Link>
                            </div>
                            }
                            {cart.length > 0 && <div className="total">
                                <div className="total__item total__sub-total">
                                    <span>Subtotal</span>
                                    <span>${(total() * .9).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__taxl">
                                    <span>Tax</span>
                                    <span>${(total() * .1).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>Price</span>
                                    <span>${total()}</span>
                                </div>
                                <button className="btn btn__checkout no-cursor" onClick={() => alert('Whoops! This button is not implemented yet.')}>
                                    Proceed to checkout
                                </button>
                            </div>}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;
