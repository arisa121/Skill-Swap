// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAmOvvCum6fR8TrukvDXNtL35VFHrnj1Y",
  authDomain: "assignment-9-a5b05.firebaseapp.com",
  projectId: "assignment-9-a5b05",
  storageBucket: "assignment-9-a5b05.firebasestorage.app",
  messagingSenderId: "949853241135",
  appId: "1:949853241135:web:a91ddd0931d709e633abda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;