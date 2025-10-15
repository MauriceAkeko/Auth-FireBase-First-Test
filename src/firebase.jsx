// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVN0tHBtK916Zbb_dt__DJ2TRf1mtdWgg",
  authDomain: "first-project-61ba0.firebaseapp.com",
  projectId: "first-project-61ba0",
  storageBucket: "first-project-61ba0.firebasestorage.app",
  messagingSenderId: "413225415447",
  appId: "1:413225415447:web:01703a90f1b1aea8247d52",
  measurementId: "G-261R7BQD55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);