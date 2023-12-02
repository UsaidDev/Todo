
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAScTZuBU5tKhpYq2Punxcqor9zh2SSmXI",
  authDomain: "project-9a592.firebaseapp.com",
  projectId: "project-9a592",
  storageBucket: "project-9a592.appspot.com",
  messagingSenderId: "987639172321",
  appId: "1:987639172321:web:5b28cf531e2cd07d76bba0",
  measurementId: "G-TQ2N2T69KZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
