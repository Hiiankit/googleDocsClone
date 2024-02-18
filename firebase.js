import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5L_PAcnmKvwj8U5r4rWaLcEj1ZPSfH2w",
  authDomain: "ankit-f0f88.firebaseapp.com",
  projectId: "ankit-f0f88",
  storageBucket: "ankit-f0f88.appspot.com",
  messagingSenderId: "12839548393",
  appId: "1:12839548393:web:9d35c2516928e848cd4778"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
