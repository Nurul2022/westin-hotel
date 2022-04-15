// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4S2qXXWrEZcHOCnokiLpMzeXycH2B3qQ",
  authDomain: "westin-hotel.firebaseapp.com",
  projectId: "westin-hotel",
  storageBucket: "westin-hotel.appspot.com",
  messagingSenderId: "62751670392",
  appId: "1:62751670392:web:b62cc9ff2f09af3a6d2d8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;