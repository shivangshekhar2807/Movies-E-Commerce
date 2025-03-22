import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import AllContext from '../Store/Store-Context';


function HeaderCart({ showCartHandler }) {
    
    const CartContext = useContext(AllContext);
    const totalItem = CartContext.showCartItem.reduce((currobj, item) => {
        currobj = currobj + Number(item.quantity)
        return currobj
    }, 0);

    return <Button variant="primary" onClick={showCartHandler}>
        Cart <Badge bg="secondary">{totalItem}</Badge>
            <span className="visually-hidden">unread messages</span>
    </Button>
    
}

export default HeaderCart;