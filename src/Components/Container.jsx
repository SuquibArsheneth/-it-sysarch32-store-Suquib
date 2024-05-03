/* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */

// import React from 'react';
// import './index.css';
// function Container({ children }) {
//   const handleButtonClick = (button) => {
//     console.log(`Button ${button} clicked`);
//     // You can add your button click logic here
//   };

//   return (
//     <div className="container_choices">
//       <h1 className="style">Bag Style</h1>
//       <div className="buttoners-container">
//         <button className="btn1"onClick={() => handleButtonClick(1)}>Hand Bag</button>
//         <button className="btn2"onClick={() => handleButtonClick(2)}>Shoulder Bag</button>
      
    
//       <h1 className="stylers">Bag Color</h1>
    
//         <button className="btn3"onClick={() => handleButtonClick(3)}>Brown</button>
//         <button className="btn4"onClick={() => handleButtonClick(4)}>Black</button>
//       </div>
//       {children}
//     </div>
 
    
//   );
// }

// export default Container;
// import React, { useState } from 'react';
// import ContainerProduct from "./Product.jsx";

// function Container() {
//   const [showProduct, setShowProduct] = useState(false);
 
//   const toggleProduct = () => {
//     setShowProduct(!showProduct);
//   };

//   return (
//     <div className="container_choices">
//       <h1 className="style">Bag Style</h1>
//       <div className="buttoners-container">
//         <button className="btn1" onClick={toggleProduct}>Hand Bag</button>
//         <button className="btn2" onClick={toggleProduct}>Shoulder Bag</button>
//         {/* Add more buttons for other options if needed */}
//       </div>

//       <h1 className="stylers">Bag Color</h1>
//       <button className="btn3" onClick={toggleProduct}>Brown</button>

     
//         {/* Add buttons for bag color options */}
      

//       {showProduct && <ContainerProduct />} {/* Display Product component when showProduct is true */}
//     </div>
//   );
// }

// export default Container;


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
