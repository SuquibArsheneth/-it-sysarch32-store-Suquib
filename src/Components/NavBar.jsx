/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// // /* eslint-disable no-unused-vars */

//  import React from 'react';

// function NavBar() {
//   return (
//     <div>
//       <div className="navbar"></div>
//       <div className="border-b">
//         <div className="navbar-content">
//           <div className="navbar-inner">
//             <div className="logo-container">
//               <p className="logo">AC STORE</p>
//               <p className="collections-text">C O L L E C T I O N S</p>
//             </div>
//             {/* <button className="shopping-cart-button-babaw">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shopping-cart-icon">
//                 <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
//                 <path d="M3 6h18"></path>
//                 <path d="M16 10a4 4 0 0 1-8 0"></path>
//               </svg>
//               <span>0</span>
//             </button> */}
         
//           </div>
//          </div>
//        </div>
//     </div>
//    );
//  }

//  export default NavBar;
import React, { useState } from 'react';

function NavBar({ cartItems }) {
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Function to handle cart button click
  const handleCartButtonClick = () => {
    setIsCartVisible(!isCartVisible); // Toggle cart visibility
  };

  return (
    <div>
      <div className="navbar"></div>
      <div className="border-b">
        <div className="navbar-content">
          <div className="navbar-inner">
            <div className="logo-container">
              <p className="logo">AC STORE</p>
              <p className="collections-text">C O L L E C T I O N S</p>
            </div>
         
            {/* <button className="shopping-cart-button-babaw" onClick={handleCartButtonClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shopping-cart-icon">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
             
              <span>{cartItems ? cartItems.length : 0}</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;


