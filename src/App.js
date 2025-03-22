// import logo from './logo.svg';
// import './App.css';
import {Button,Alert, Form} from 'react-bootstrap';
import Header from './components/Header/Header';
import AvailableMovies from './components/Movies/AvailableMovies';
import FooterLogo from './components/Footer/FooterLogo';


function App() {
  return <>
  <Header></Header>
    <AvailableMovies></AvailableMovies>
    <FooterLogo></FooterLogo>
  </>
  

}

export default App;
