// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import Footer from "./Components/Footer.jsx";
//  import Card from "./Components/Card.jsx";
// import NavBar from "./Components/NavBar.jsx";
// import FeaturedProducts from "./Components/FeaturedProducts.jsx";
// import './index.css';

// //import Product from "./Components/Product.jsx";


// function App() {
 
//   return (
//     <div className="app-container">
//       <NavBar/>
//      <Card />
//     <FeaturedProducts/> 
//     {/* <Product/> */}
     
      
//       <Footer />
//     </div>
//   );
// }  

// export default App;

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer.jsx";
import Card from "./Components/Card.jsx";
import NavBar from "./Components/NavBar.jsx";
import FeaturedProducts from "./Components/FeaturedProducts.jsx";
import './index.css';
import './Components/Container.jsx'
import Container from "./Components/Container.jsx";


function App() {
  const [cartCount, setCartCount] = useState(0);

  
  const updateCart = (count) => {
    setCartCount(count); // Update cart count state
  };
  return (
    <div className="app-container">
      <NavBar cartCount={cartCount} />
      <Card />
      <FeaturedProducts updateCart={updateCart} />
      <Container/>
      <Footer />
      
    </div>
  );
}  

export default App;
