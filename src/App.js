// import logo from './logo.svg';
// import './App.css';
import {Button,Alert, Form} from 'react-bootstrap';
import Header from './components/Header/Header';
import AvailableMovies from './components/Movies/AvailableMovies';
import FooterLogo from './components/Footer/FooterLogo';
import CartItem from './components/Cart/CartItem';
import { useState } from 'react';


function App() {

  const [showCart, setShowCart] = useState(false);

  function showCartHandler() {
    setShowCart(true)
  }

  function dontShowCartHandler() {
    setShowCart(false);
  }

  return <>
    {showCart && <CartItem dontShowCartHandler={dontShowCartHandler}></CartItem>}
     <Header showCartHandler={showCartHandler}></Header>
    <AvailableMovies></AvailableMovies>
    <FooterLogo></FooterLogo>
    
  </>
  

}

export default App;
