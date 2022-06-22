import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDhe_YexgjzChlX59ys2E0RRoXiQ2gQCx8",
    authDomain: "iphytodo.firebaseapp.com",
    projectId: "iphytodo",
    storageBucket: "iphytodo.appspot.com",
    messagingSenderId: "120084107317",
    appId: "1:120084107317:web:60d22bd1eb80589229a17c",
    measurementId: "G-G4JBPDMYE0"
}


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);