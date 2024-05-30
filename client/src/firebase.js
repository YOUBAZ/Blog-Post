// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-60498.firebaseapp.com",
  projectId: "mern-blog-60498",
  storageBucket: "mern-blog-60498.appspot.com",
  messagingSenderId: "745629325953",
  appId: "1:745629325953:web:bf26aae23f8855ec81cb80",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
