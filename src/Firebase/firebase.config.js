// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_apiKey,
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId:import.meta.env.VITE_projectId,
  // storageBucket:import.meta.env.VITE_storageBucket,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId,
  // appId:import.meta.env.VITE_appId

  apiKey: "AIzaSyCcWMGtoCLFj9U5DN6OrgCG04KLrdlBJlA",
  authDomain: "toy-shop-client-feb00.firebaseapp.com",
  projectId: "toy-shop-client-feb00",
  storageBucket: "toy-shop-client-feb00.appspot.com",
  messagingSenderId: "35600656163",
  appId: "1:35600656163:web:1d6f1e5f08d5bc3a898e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;