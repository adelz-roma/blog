// Import the functions you need from the SDKs you need
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
//import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArB0xV7fsoOGqKU_zUtp1iH6u0LQOgIFk",
  authDomain: "blog-app-bb08f.firebaseapp.com",
  projectId: "blog-app-bb08f",
  storageBucket: "blog-app-bb08f.firebasestorage.app",
  messagingSenderId: "1061987018406",
  appId: "1:1061987018406:web:bd9bb369c72afddc72f667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export default app;