import Button from 'react-bootstrap/Button';

function SeeTheCart({showCartHandler}) {
    return    <Button variant="primary" onClick={showCartHandler}>See the Cart</Button>
}
export default SeeTheCart;