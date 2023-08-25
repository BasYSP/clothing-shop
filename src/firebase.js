// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADTwbJV8n_6MapPGqAw7cLZocz-IFgoPc",
  authDomain: "clothing-shop-9accd.firebaseapp.com",
  projectId: "clothing-shop-9accd",
  storageBucket: "clothing-shop-9accd.appspot.com",
  messagingSenderId: "529448231706",
  appId: "1:529448231706:web:7944c710acd813101f42a3",
  measurementId: "G-ERX901CV6P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
