import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword , updateEmail , reauthenticateWithCredential, EmailAuthProvider , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore , doc, setDoc ,getDoc , updateDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import {  getStorage, ref , uploadBytesResumable, getDownloadURL  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBa1OJ1QQ_5ksCYNh8wxLP8Mrf_a0Ozem4",
    authDomain: "blogweb-f23ae.firebaseapp.com",
    projectId: "blogweb-f23ae",
    storageBucket: "blogweb-f23ae.appspot.com",
    messagingSenderId: "579369865350",
    appId: "1:579369865350:web:8d3e7979e329134db80107",
    measurementId: "G-W4F4F5B071"
  };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {auth , createUserWithEmailAndPassword , doc , setDoc , db , signInWithEmailAndPassword , onAuthStateChanged , getDoc 
, signOut , ref , uploadBytesResumable, getDownloadURL ,storage , updateDoc , reauthenticateWithCredential, EmailAuthProvider , updateEmail }