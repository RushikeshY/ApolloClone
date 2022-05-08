import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCI_J4mjxAWXBEIG4NbpR4TO3-zVXuzLQA",
    authDomain: "apollo-ea1c6.firebaseapp.com",
    projectId: "apollo-ea1c6",
    storageBucket: "apollo-ea1c6.appspot.com",
    messagingSenderId: "100754270060",
    appId: "1:100754270060:web:d4c2c20801c90f2392f549",
    measurementId: "G-HKH983Q052"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)