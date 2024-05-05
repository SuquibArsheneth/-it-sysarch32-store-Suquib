/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ShoppingCartButton = ({ cartItems, toggleCartVisibility }) => (
  <button className="shopping-cart-button-babaw" onClick={toggleCartVisibility}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shopping-cart-icon">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
      <path d="M3 6h18"></path>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
    <span>{cartItems.length}</span>
  </button>
);

export default ShoppingCartButton;
