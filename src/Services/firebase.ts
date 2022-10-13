// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANfBdlhTL1HAYQRxpVSX7IcovLKSZ-lIU",
    authDomain: "react-final-8747f.firebaseapp.com",
    projectId: "react-final-8747f",
    storageBucket: "react-final-8747f.appspot.com",
    messagingSenderId: "358148856029",
    appId: "1:358148856029:web:7dd5298cb2dda0c7956334",
    measurementId: "G-SM32ENVKVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);