import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyqbEXHZXlcNp0WoNUaLBP_fN8BDRSYgo",
  authDomain: "car-viter.firebaseapp.com",
  projectId: "car-viter",
  storageBucket: "car-viter.appspot.com",
  messagingSenderId: "1086565133926",
  appId: "1:1086565133926:web:71f3aa65ccc5b79b70c7a7",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
