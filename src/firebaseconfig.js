// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDacoIr7xHuhMDiM4CbQxX2R4JYpSiB_lM",
  authDomain: "assignment10-eb556.firebaseapp.com",
  projectId: "assignment10-eb556",
  storageBucket: "assignment10-eb556.appspot.com",
  messagingSenderId: "1063920410674",
  appId: "1:1063920410674:web:bb9e02f42d1ef93d425c2b"
};

// Initialize Firebase
const app = () => initializeApp(firebaseConfig);
export const auth = getAuth(initializeApp(firebaseConfig))

export default app;