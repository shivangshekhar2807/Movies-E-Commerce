import { useContext } from "react";
import AllContext from "../Store/Store-Context";


function SingleCart({ singlecartitem }) {

    const ContextFunction = useContext(AllContext);
    
    function handleDelete() {
        ContextFunction.DeleteFromCart({
            type: "DELETE", payload: {
                id:singlecartitem.id,
            }
        })
    }


     return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      
      <img
        src={singlecartitem.imageUrl}
        alt={singlecartitem.title}
        className="img-fluid me-3"
        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
      />
      
 
      <div className="flex-fill">
        <label htmlFor="title" className="fw-bold">{singlecartitem.title}</label>
      </div>

   
      <div className="flex-fill">
        <h6>{`$${singlecartitem.price}`}</h6>
      </div>

   
      <div className="d-flex align-items-center">
        <input type="number" min="1" value={singlecartitem.quantity} className="form-control w-25 me-3" />
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>Remove</button>
      </div>
    </li>
  );
}
export default SingleCart;

