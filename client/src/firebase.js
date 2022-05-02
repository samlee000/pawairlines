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

const firebaseConfig1 = {
  apiKey: "AIzaSyDwDL-qes41HhZ9DsKYjNV6ayZnOdYUEnE",
  authDomain: "admin-pawsairline.firebaseapp.com",
  projectId: "admin-pawsairline",
  storageBucket: "admin-pawsairline.appspot.com",
  messagingSenderId: "862546418508",
  appId: "1:862546418508:web:e1255194e5c171f5600de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const app1 = initializeApp(firebaseConfig1, 'secondary');

export const auth = getAuth(app);
export const auth1 = getAuth(app1);
export default app & app1 