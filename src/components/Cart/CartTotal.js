

function CartTotal({ cartElements }) {
    
    let total = cartElements.reduce((curr, item) => {
        curr = curr + Number(item.quantity) * Number(item.price)
        return curr;
    },0)

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <h5>Total</h5>
            <span>${total.toFixed(2)}</span> {/* Display total with two decimal places */}
        </li>
    );
}

export default CartTotal;