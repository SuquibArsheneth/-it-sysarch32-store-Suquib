/* eslint-disable no-unused-vars */




import React, { useState, useEffect } from 'react';
import { db } from "../Config/firebase";
import { collection, getDocs } from "firebase/firestore";
import './index.css'; // Make sure this imports your CSS file

const ContainerProduct = () => {
  const [mainImage, setMainImage] = useState("https://dct-ep-vintageluxurystore.com/cdn/shop/products/37348-2_1.jpg?v=1705738608");
  const [isVisible, setIsVisible] = useState(true);
  const [bagList, setBagList] = useState([]);

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const handleCloseClick = () => {
    setIsVisible(false);
  };
  
  useEffect(() => {
    const getBagList = async () => {
      try { 
        const BagCollectionsRef = collection(db, "Bag");
        const data = await getDocs(BagCollectionsRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setBagList(filteredData);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getBagList();
  }, []);

  return (
    
    <div className="containerns">
       
      {isVisible && (
        <div className="product-container_lv">
           <button className="close-button" onClick={handleCloseClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
          <div className="product-image-lv">
            <img alt="Image" height="300px" width="300px"src={mainImage} />
          </div>
          <div className="image-buttons-1" >
            <button onClick={() => handleImageClick("https://dct-ep-vintageluxurystore.com/cdn/shop/products/37348-2_1.jpg?v=1705738608")}>
              <img alt="Image 1"  height="100px" width="100px"src="https://dct-ep-vintageluxurystore.com/cdn/shop/products/37348-2_1.jpg?v=1705738608" />
            </button>
            <button onClick={() => handleImageClick("https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-carryall-mm-monogram-canvas-handbags--M46197_PM2_Front%20view.jpg")}>
              <img alt="Image 2"height="100px" width="100px" src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-carryall-mm-monogram-canvas-handbags--M46197_PM2_Front%20view.jpg" />
            </button>
          </div>
          <div className="product-details">
            {bagList.map(bag => (
              <div key={bag.id}>
                <p>BRAND: {bag.bag_name}</p>
                <p>STYLE: {bag.bag_style}</p>
                <p>COLOR: {bag.bag_color}</p>
                <p>PRICE: {bag.bag_price}</p>
              </div>
            ))}
            <button className="add-to-cart">Add To Cart</button>
          </div>
        
        </div>
      )}
    </div>
  );
};

export default ContainerProduct;
