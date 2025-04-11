import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyABklV0AND5TsyTmHm0Sm6ZilxGBykYlrU",
  authDomain: "mi-barrio-d16fb.firebaseapp.com",
  projectId: "mi-barrio-d16fb",
  storageBucket: "mi-barrio-d16fb.firebasestorage.app",
  messagingSenderId: "641873237350",
  appId: "1:641873237350:web:218291b421389eb869e4a7",
  measurementId: "G-ECRRMH1FTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);