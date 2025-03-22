import React from 'react';
import './CartModal.css'; // Import your CSS for modal styling

function ModalOverlays(props) {
   return (
    <div className="modal-overlay">
      {props.children}
    </div>
  );
}

function CartModal(props) {
  return (
    <ModalOverlays>
      {props.children}
    </ModalOverlays>
  );
}

export default CartModal;