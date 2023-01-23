// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdxyXX2V_Drqf4-j5ATQ1CuvHX8UxIUKU",
  authDomain: "reactnative-todolist-43612.firebaseapp.com",
  projectId: "reactnative-todolist-43612",
  storageBucket: "reactnative-todolist-43612.appspot.com",
  messagingSenderId: "1069271689961",
  appId: "1:1069271689961:web:9443e476695257d6f6de78",
  measurementId: "G-SJ03E7NDXP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
