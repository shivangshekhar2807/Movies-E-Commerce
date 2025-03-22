

function CartTotal({ showCartItem }) {
    
    let total = showCartItem.reduce((curr, item) => {
        curr = curr + Number(item.quantity) * Number(item.price)
        return curr;
    },0)

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <h5>Total</h5>
            <span>${total}</span> 
        </li>
    );
}

export default CartTotal;