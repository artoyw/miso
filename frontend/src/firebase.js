// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import admin from 'firebase-admin';

import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyCagIPnhrvn2sPYcwMtdKnGNjNZYVeZLZ4",
  authDomain: "ut-seller.firebaseapp.com",
  projectId: "ut-seller",
  storageBucket: "ut-seller.firebasestorage.app",
  messagingSenderId: "526548334991",
  appId: "1:526548334991:web:4b39e533714d71d5f0f3fa",
  measurementId: "G-WWWX3QW98K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { firebaseConfig };

export default db;
export const auth = getAuth(app);