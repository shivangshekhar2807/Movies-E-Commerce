// import logo from './logo.svg';
// import './App.css';
import {Button,Alert, Form} from 'react-bootstrap';
import Header from './components/Header/Header';
import AvailableMovies from './components/Movies/AvailableMovies';
import FooterLogo from './components/Footer/FooterLogo';
import CartItem from './components/Cart/CartItem';
import { useState } from 'react';
import WrapperApp from './components/Store/WrapperApp';
import {Outlet} from 'react-router-dom';
import Loader from './components/Movies/Loader';
import MoviesForm from './components/Movies/MoviesForm';


function App() {

  const [showCart, setShowCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function showCartHandler() {
    setShowCart(true)
  }

  function dontShowCartHandler() {
    setShowCart(false);
  }

 
  

  return <WrapperApp>
    
    {showCart && <CartItem dontShowCartHandler={dontShowCartHandler}></CartItem>}
    <Header showCartHandler={showCartHandler}></Header>
    <Outlet></Outlet>

    <MoviesForm></MoviesForm>
    
    <AvailableMovies showCartHandler={showCartHandler} ></AvailableMovies>
    <FooterLogo></FooterLogo>
    
  </WrapperApp>
  

}

export default App;
