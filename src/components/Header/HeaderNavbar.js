import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderCart from './HeaderCart';

function HeaderNavbar() {
    return (
        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
          <Nav className="mx-auto gap-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
            <HeaderCart></HeaderCart>
        </Container>
      </Navbar>
        </>
    )
}

export default HeaderNavbar;