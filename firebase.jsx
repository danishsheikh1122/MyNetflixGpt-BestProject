// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQdlY23D1lVo7IjhMfxWwxuJdK4UhGUUE",
  authDomain: "netflixclone1122.firebaseapp.com",
  projectId: "netflixclone1122",
  storageBucket: "netflixclone1122.appspot.com",
  messagingSenderId: "952587869377",
  appId: "1:952587869377:web:a9957af5b7a60c2ade0840",
  measurementId: "G-B8E1T2JQBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);