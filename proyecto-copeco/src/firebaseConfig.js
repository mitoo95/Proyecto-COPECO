import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAakkoR6XV-Q-5xADAiaz9QAedjXV1GMGs",
  authDomain: "copecovinculacion-1de05.firebaseapp.com",
  projectId: "copecovinculacion-1de05",
  storageBucket: "copecovinculacion-1de05.appspot.com",
  messagingSenderId: "304953115333",
  appId: "1:304953115333:web:4a6a4ac42058239949e6ac",
  measurementId: "G-F6K13NWRKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);