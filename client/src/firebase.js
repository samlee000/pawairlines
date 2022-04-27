// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa2FD6axZZ4IzYXQhLfzLWMMxYS0R1t8c",
  authDomain: "pawsairline-auth.firebaseapp.com",
  projectId: "pawsairline-auth",
  storageBucket: "pawsairline-auth.appspot.com",
  messagingSenderId: "225956555701",
  appId: "1:225956555701:web:4128740ecca577e692c7fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app