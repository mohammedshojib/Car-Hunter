import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-0gmaAjUkGPOcKj6oLOZNJCV6ThdbSlQ",
  authDomain: "car-hunter-11431.firebaseapp.com",
  projectId: "car-hunter-11431",
  storageBucket: "car-hunter-11431.appspot.com",
  messagingSenderId: "812527704773",
  appId: "1:812527704773:web:a263f16001c621bba0eeac",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
