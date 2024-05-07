// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCW94dXrQWJbH7OcPksfSPcKgDWMSYM1o",
  authDomain: "food-cart-8fe83.firebaseapp.com",
  projectId: "food-cart-8fe83",
  storageBucket: "food-cart-8fe83.appspot.com",
  messagingSenderId: "888126015972",
  appId: "1:888126015972:web:fea8d89a4bba58794a9ff1",
  measurementId: "G-NQGVF3F125"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();