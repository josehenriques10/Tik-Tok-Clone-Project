
import { initializeApp } from "firebase/app";
import { getFirestore } from"firebase/firestore/lite"

/*Abaixo cinfigure a sua API particular*/

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

