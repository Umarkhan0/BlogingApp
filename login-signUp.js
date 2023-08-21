import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getAuth , createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBa1OJ1QQ_5ksCYNh8wxLP8Mrf_a0Ozem4",
  authDomain: "blogweb-f23ae.firebaseapp.com",
  projectId: "blogweb-f23ae",
  storageBucket: "blogweb-f23ae.appspot.com",
  messagingSenderId: "579369865350",
  appId: "1:579369865350:web:8d3e7979e329134db80107",
  measurementId: "G-W4F4F5B071"
}


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

let nameInput = document.getElementById("name-input");
let email = document.querySelector(".email-input");
let password = document.querySelector(".password input");
let signUpbtn = document.getElementById("sign-up");
let errorName = document.querySelector(".error-charactors");
signUpbtn.addEventListener("click", (e) => {
    e.preventDefault()


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

    console.log(nameInput.value.length)
    // if (nameInput.value.length < "4") {
    //     nameInput.style.border = "2px solid red";
    //     errorName.style.display = "block";
    // }
    // else {
    //     nameInput.style.border = "none";
    //     errorName.style.display = "none"
       
        




    // }
})