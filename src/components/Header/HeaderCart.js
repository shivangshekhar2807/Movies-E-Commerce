import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


function HeaderCart({showCartHandler}) {
    return  <Button variant="primary" onClick={showCartHandler}>
            Cart <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
            </Button>
}

export default HeaderCart;