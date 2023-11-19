import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBK1_9tKppJYCDdFJm6ZGYYdcuw0LVABN8",
  authDomain: "register-2a973.firebaseapp.com",
  projectId: "register-2a973",
  storageBucket: "register-2a973.appspot.com",
  messagingSenderId: "176953992346",
  appId: "1:176953992346:web:a325de4eead17c1cea2b23",
  measurementId: "G-BMKYB3BQFZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
