import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo  from '../assets/Library.svg'
import { Link } from "react-router-dom";

const Nav = ({ numberOfItems }) => {
    function menuOpen() {
        document.body.classList += ' menu--open'
    }
    function menuClose() {
        document.body.classList.remove('menu--open')
    }
    const num = numberOfItems()
    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={logo} alt="" className="logo" />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/books" className="nav__link">Books</Link>
                    </li>
                    <button className="btn__menu" onClick={menuOpen}>
                        <FontAwesomeIcon icon='bars' />
                    </button>
                    <li className="nav__icon">
                        <Link to="/cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        { num > 0 && 
                        <span className="cart__length">{num}</span>
                        }
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={menuClose}>
                        <FontAwesomeIcon icon='times' />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/" className="menu__link">Home</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/books" className="menu__link">Books</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/cart" className="menu__link">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;