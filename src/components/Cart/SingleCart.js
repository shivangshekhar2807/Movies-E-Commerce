

function SingleCart({singlecartitem}) {
     return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {/* Image */}
      <img
        src={singlecartitem.imageUrl}
        alt={singlecartitem.title}
        className="img-fluid me-3"
        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
      />
      
      {/* Title */}
      <div className="flex-fill">
        <label htmlFor="title" className="fw-bold">{singlecartitem.title}</label>
      </div>

      {/* Price */}
      <div className="flex-fill">
        <h6>{`$${singlecartitem.price}`}</h6>
      </div>

      {/* Quantity */}
      <div className="d-flex align-items-center">
        <input type="number" min="1" value={singlecartitem.quantity} className="form-control w-25 me-3" />
        <button className="btn btn-danger btn-sm">Remove</button>
      </div>
    </li>
  );
}
export default SingleCart;

