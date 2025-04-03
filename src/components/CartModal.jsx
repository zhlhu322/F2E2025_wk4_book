import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';

const CartModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <div className="cart-modal-header">
          <h2 className="instrument-serif-regular">Shopping Cart</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="cart-modal-content">
          {cartItems.length === 0 ? (
            <p className="empty-cart instrument-serif-regular">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.cover} alt={item.title} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3 className="instrument-serif-regular">{item.title}</h3>
                      <p className="instrument-serif-regular">x{item.quantity}</p>
                      <p className="instrument-serif-regular cart-item-price">${item.price * item.quantity}</p>
                    </div>
                    <button 
                      className="remove-button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <p className="instrument-serif-regular">Total: ${total.toFixed(2)}</p>
                <button className="checkout-button">Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal; 