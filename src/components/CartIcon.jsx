import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartModal from './CartModal';

const CartIcon = ({ position = '' }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getPositionClass = () => {
    switch (position) {
      case 'center':
        return 'mx-auto';
      case 'right':
        return 'ml-auto';
      default:
        return '';
    }
  };

  return (
    <>
      <div 
        className={`cart-link ${getPositionClass()}`}
        onClick={() => setIsModalOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#373936"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cart-icon"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        {totalQuantity > 0 && (
          <span className="cart-quantity">
            {totalQuantity}
          </span>
        )}
      </div>
      <CartModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default CartIcon; 