import Home from "./pages/Home";
import React, { useEffect, useState } from "react"
import Footer from "./components/Footer";
import { books } from './data';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function removeBook(book) {
    setCart(cart.filter((cartItem) => cartItem.id !== book.id));
  }

  function numberOfItems() {
    let num = 0
    cart.forEach(book => {
      num += book.quantity
    });
    return num
  }

  function addToCart(book) {  
    setCart([...cart, {...book, quantity: 1}])
  }
  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if (+item.id === +book.id) {
        return {
          ...item,
          quantity: +quantity
        }
      } 
      else {
        return item
      }
    }))
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])


  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems}/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} cart={cart} addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart books={books} cart={cart} removeBook={removeBook} changeQuantity={changeQuantity}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
