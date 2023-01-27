// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHvtUfqfG3E9EZk4ZKhc_7q8U_8Q7hn4I",
  authDomain: "entos-739af.firebaseapp.com",
  databaseURL: "https://entos-739af-default-rtdb.firebaseio.com",
  projectId: "entos-739af",
  storageBucket: "entos-739af.appspot.com",
  messagingSenderId: "904228529083",
  appId: "1:904228529083:web:5381ece6478b2523d8da9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
