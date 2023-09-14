import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCux0tAZjEARkO6J1uuo8ghq6g6Z76QatA",
  authDomain: "ott-streaming-app-with-gpt.firebaseapp.com",
  projectId: "ott-streaming-app-with-gpt",
  storageBucket: "ott-streaming-app-with-gpt.appspot.com",
  messagingSenderId: "817399925544",
  appId: "1:817399925544:web:292d8a299211e684429e1d",
  measurementId: "G-7CHG39W73J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();