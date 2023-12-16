import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR8VElSTDeoTtc_8mfGXqdsqVbOr4yKDo",
  authDomain: "ecommerce-in-react-859a3.firebaseapp.com",
  projectId: "ecommerce-in-react-859a3",
  storageBucket: "ecommerce-in-react-859a3.appspot.com",
  messagingSenderId: "591640169270",
  appId: "1:591640169270:web:17882a624d4f8122ea4197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);