/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCo8IQ_o-1B1eD7e5zcQOhQWpdhhp9glRo",
  authDomain: "it-sysarch32-store-suqui-48189.firebaseapp.com",
  projectId: "it-sysarch32-store-suqui-48189",
  storageBucket: "it-sysarch32-store-suqui-48189.appspot.com",
  messagingSenderId: "581617827436",
  appId: "1:581617827436:web:51a2d84e706384ef04e249",
  measurementId: "G-167Q62HZH7"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app); 