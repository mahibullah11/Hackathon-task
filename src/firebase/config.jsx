import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyApMtvXhnB2Sj79Bsvi62y2dZE9w7ZY0Ws",
    authDomain: "final-hackathon-cac7e.firebaseapp.com",
    projectId: "final-hackathon-cac7e",
    storageBucket: "final-hackathon-cac7e.appspot.com",
    messagingSenderId: "582854086281",
    appId: "1:582854086281:web:31dc7159d9c9eb373ec058"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);