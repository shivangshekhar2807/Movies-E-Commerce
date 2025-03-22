import SingleCart from "./SingleCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import CloseButton from 'react-bootstrap/CloseButton';
import CartModal from "./CartModal";
import CartTotal from "./CartTotal";
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import AllContext from "../Store/Store-Context";
const cartElements = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

quantity: 2,

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

quantity: 3,

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

quantity: 1,

}

]


function CartItem({ dontShowCartHandler }) {
    
    const CartContext = useContext(AllContext);
       

    return (
    <CartModal>
            <CloseButton onClick={dontShowCartHandler} />
      <h1 className="text-center my-4">Cart</h1>
      <div className="row text-center mb-4">
        <div className="col-4">
          <h5>Item</h5>
        </div>
        <div className="col-4">
          <h5>Price</h5>
        </div>
        <div className="col-4">
          <h5>Quantity</h5>
        </div>
      </div>
      <ul className="list-group">
        {CartContext.showCartItem.map((singlecartitem, index) => {
          return (
            <SingleCart key={index} singlecartitem={singlecartitem}></SingleCart>
          )
        })}
                
             <CartTotal showCartItem={CartContext.showCartItem}></CartTotal>   
            </ul>
            <Button variant="success">Purchase</Button>
    </CartModal>
  );
}
export default CartItem;