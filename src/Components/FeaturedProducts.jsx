

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Product from "./Product.jsx";
import ChanelProduct from "./ChanelProduct.jsx"; // Import ChanelProduct component

function FeaturedProducts() {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showChanelProduct, setShowChanelProduct] = useState(false); // State for ChanelProduct visibility

  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  const toggleChanelProduct = () => { // Function to toggle ChanelProduct visibility
    setShowChanelProduct(!showChanelProduct);
  };

  const addToCart = (productName) => {
    // Implement your addToCart logic here
    console.log(`${productName} added to cart.`);
  };

  return (
    <div className="featured-products-container">
      <h2 className="featured-title">Featured Products</h2>
      <div className="featured-product">
        <div className="featured-product-card">
          <div className="product-image-container">
            <img className="product-image" src="https://dct-ep-vintageluxurystore.com/cdn/shop/products/37348-2_1.jpg?v=1705738608" alt="Louis" />
            <button className="expand-button" onClick={toggleDetails1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-expand text-gray-600"
              >
                <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path>
                <path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path>
                <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path>
                <path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path>
              </svg>
            </button>
            <button className="shopping-cart-button" onClick={() => addToCart("Louis Vuitton")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart text-gray-600"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            </button>
            <div className="product-details-10">
            <h2 className="product-brand">Louis Vuitton</h2>
          </div>
          </div>
          {showDetails1 && <Product />}
     
        </div>
      </div>
      <div className="featured-product">
        <div className="featured-product-card">
          <div className="product-image-container">
            <img className="product-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Xjzf3wUtSDlOfhrJI_CxWSLfCr9FuQS1edgfq78wnjezGDN9AvboBdboBR68TH69cFI&usqp=CAU" alt="Placeholder" />
            <button className="expand-button" onClick={toggleDetails2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-expand text-gray-600"
              >
                <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path>
                <path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path>
                <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path>
                <path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path>
              </svg>
            </button>
            <button className="shopping-cart-button" onClick={() => addToCart("Chanel")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart text-gray-600"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            </button>
            <div className="product-details-10">
            <h2 className="product-brand">Chanel</h2>
          </div>
          </div>
          {showDetails2 && (
             <ChanelProduct />
       
          )}
         
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
