import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-M3BsYKvzDdnPxIQp6nK-XPE3CbSRRAY",
  authDomain: "ecommerce-react-304a7.firebaseapp.com",
  projectId: "ecommerce-react-304a7",
  storageBucket: "ecommerce-react-304a7.firebasestorage.app",
  messagingSenderId: "319744238848",
  appId: "1:319744238848:web:d5e249c7d772be968d7fe5"
};


initializeApp(firebaseConfig);

const db = getFirestore ()

export default db