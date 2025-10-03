// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9P7xPKNqF1a_9jylP_B0Dm3XDU860i1s",
  authDomain: "ai-travel-planner-5c8bd.firebaseapp.com",
  projectId: "ai-travel-planner-5c8bd",
  storageBucket: "ai-travel-planner-5c8bd.firebasestorage.app",
  messagingSenderId: "746683155722",
  appId: "1:746683155722:web:a7fb7ca3b7bcb3f971a6f3",
  measurementId: "G-QCTE9PMD0H"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);