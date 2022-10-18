// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmY0wzfRL9ujcaUEofcJ3Q4XLkVPsJwls",
  authDomain: "ema-john-simple-shop-76329.firebaseapp.com",
  projectId: "ema-john-simple-shop-76329",
  storageBucket: "ema-john-simple-shop-76329.appspot.com",
  messagingSenderId: "864137898745",
  appId: "1:864137898745:web:79579c5ce7e9d69bfb9028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default(app);