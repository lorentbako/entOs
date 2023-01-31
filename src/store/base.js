import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHvtUfqfG3E9EZk4ZKhc_7q8U_8Q7hn4I",
  authDomain: "entos-739af.firebaseapp.com",
  databaseURL: "https://entos-739af-default-rtdb.firebaseio.com",
  projectId: "entos-739af",
  storageBucket: "entos-739af.appspot.com",
  messagingSenderId: "904228529083",
  appId: "1:904228529083:web:5381ece6478b2523d8da9e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
