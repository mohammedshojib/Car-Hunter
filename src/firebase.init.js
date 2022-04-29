import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClw_e4kGx5pfzp8WwQCoij1ehsenUicKI",
  authDomain: "zipline-trainee.firebaseapp.com",
  projectId: "zipline-trainee",
  storageBucket: "zipline-trainee.appspot.com",
  messagingSenderId: "934373462664",
  appId: "1:934373462664:web:18dc3876af949f368e853d",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
