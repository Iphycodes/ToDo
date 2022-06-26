import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import {addDoc, collection, doc, getFirestore} from "firebase/firestore"
import { useSelector } from "react-redux";
import {currentUser} from '../App'

const firebaseConfig = {
    apiKey: "AIzaSyAYAT8gJTXrnhcZzYsO2LgZG3wOIjirUSs",
    authDomain: "todoapp-28cdc.firebaseapp.com",
    projectId: "todoapp-28cdc",
    storageBucket: "todoapp-28cdc.appspot.com",
    messagingSenderId: "255743781141",
    appId: "1:255743781141:web:929cf1ca3acd02b033211c",
    measurementId: "G-5DT7G3TW1D"
}

export const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

// export const usersCollectionRef = collection(db, 'users')

// const userId = '86fvd8rSCMUdDicYYpca'

// export const documentRef = doc(usersCollectionRef, userId)

// export const taskCollectionRef = collection(documentRef, 'tasks')

