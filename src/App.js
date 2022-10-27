import Home from "./pages/Home";
import Footer from "./components/Footer";
import { books } from './data';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} />} />
          <Route path="/cart" element={<Cart books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
