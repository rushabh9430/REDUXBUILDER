import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBLMKwL_0NN9Y7S4k6j76G3dkWIAickXI",
  authDomain: "redux-builder.firebaseapp.com",
  projectId: "redux-builder",
  storageBucket: "redux-builder.appspot.com",
  messagingSenderId: "868523926162",
  appId: "1:868523926162:web:0c846952999f24f207fc4b",
  measurementId: "G-1G70SGH7D8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// for Google popup aauthentication ⬇️
const GoogleProvider = new GoogleAuthProvider();

export { auth, GoogleProvider };
