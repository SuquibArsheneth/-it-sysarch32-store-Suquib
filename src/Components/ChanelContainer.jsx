

/* eslint-disable no-unused-vars */




import React, { useState, useEffect } from 'react';
import { db } from "../Config/firebase";
import { collection, getDocs } from "firebase/firestore";
import './index.css'; // Make sure this imports your CSS file

const ChanelContainer = () => {
  const [mainImage, setMainImage] = useState("https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_386/FSH-1711464541731-m01.jpg");
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
        const BagCollectionsRef = collection(db, "Bag2");
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
    
    <div className="container20">
       
      {isVisible && (
        <div className="product-container">
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
            <button onClick={() => handleImageClick("https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_386/FSH-1711464541731-m01.jpg")}>
              <img alt="Image 1"  height="100px" width="100px"src="https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_386/FSH-1711464541731-m01.jpg" />
            </button>
            <button onClick={() => handleImageClick("https://bagista.co.uk/cdn/shop/products/Chanel_-_Trendy_CC_-_Small_-_Chevron_-_GHW2007_2048x2048.jpg?v=1575316928")}>
              <img alt="Image 2"height="100px" width="100px" src="https://bagista.co.uk/cdn/shop/products/Chanel_-_Trendy_CC_-_Small_-_Chevron_-_GHW2007_2048x2048.jpg?v=1575316928" />
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
            {/* <button className="add-to-cart-3">Add To Cart</button> */}
          </div>
        
        </div>
      )}
    </div>
  );
};

export default ChanelContainer;
