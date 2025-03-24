import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderCart from './HeaderCart';
import { Link } from 'react-router-dom';

function HeaderNavbar({showCartHandler}) {
    return (
        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
          <Nav className="mx-auto gap-4">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/">Store</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
               <Nav.Link as={Link} to="/ContactUs">ContactUs</Nav.Link>
          </Nav>
            <HeaderCart showCartHandler={showCartHandler}></HeaderCart>
        </Container>
      </Navbar>
        </>
    )
}

export default HeaderNavbar;