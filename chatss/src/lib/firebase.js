// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: " AIzaSyB6yvbSFjl3XYzcXt3s7Z5lMcGzyJ_VoUE",
  authDomain: "reactchat-9e579.firebaseapp.com",
  projectId: "reactchat-9e579",
  storageBucket: "reactchat-9e579.appspot.com",
  messagingSenderId: "553342951348",
  appId: "1:553342951348:web:935a6a2d3a5da57f20dce1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()

export const storage = getStorage()

