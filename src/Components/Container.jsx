/* eslint-disable no-unused-vars */



import React, { useState } from 'react';
import ContainerProduct from "./ContainerProduct.jsx";
import ChanelContainer from "./ChanelContainer.jsx"; // Import ChanelProduct component

function Container() {
  const [showProduct, setShowProduct] = useState(false);
  const [showChanelProduct, setShowChanelProduct] = useState(false); // State for ChanelProduct visibility

  const toggleProduct = () => {
    setShowProduct(!showProduct);
  };

  const toggleChanelProduct = () => { // Function to toggle ChanelProduct visibility
    setShowChanelProduct(!showChanelProduct);
  };

  return (
    <div className="container_choices">
      <h1 className="style">Bag Style</h1>
      <div className="buttoners-container">
        <button className="btn1" onClick={toggleProduct}>Hand Bag</button>
        <button className="btn2" onClick={toggleChanelProduct}>Shoulder Bag</button>
        {/* Add more buttons for other options if needed */}
      </div>

      <h1 className="stylers">Bag Color</h1>
      <button className="btn3" onClick={toggleProduct}>Brown</button>
      <button className="btn4" onClick={toggleChanelProduct}>Black</button>
      {/* Add buttons for bag color options */}
      
      {showProduct && <ContainerProduct />} {/* Display Product component when showProduct is true */}
      {showChanelProduct && <ChanelContainer />} {/* Display ChanelProduct component when showChanelProduct is true */}
    </div>
  );
}

export default Container;
