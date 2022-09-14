
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "@firebase/auth"
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZQkJ6VGQnJANVg7zQB5WE5FhQbVhlcjM",
  authDomain: "shopping-cart-98c98.firebaseapp.com",
  projectId: "shopping-cart-98c98",
  storageBucket: "shopping-cart-98c98.appspot.com",
  messagingSenderId: "1062135372081",
  appId: "1:1062135372081:web:5079b0d9c9483b1a9f7810",
  measurementId: "G-6N0ZZN9KJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const db =getFirestore()
export {auth}



