import {auth , onAuthStateChanged , doc , db ,  getDoc  } from './firebase.js';

let userProfileBtn = document.getElementById("user-name");
let lofOutBtn = document.getElementById("log-out-btn")
onAuthStateChanged(auth, async(user) => {
    if (user) {
      const uid = user.uid;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        userProfileBtn.textContent = docSnap.data().name
        lofOutBtn.innerHTML  = 
        console.log(userProfileBtn)
        lofOutBtn.innerHTML = `
        <div class="login-btn" id="login-btn">
                        LOG Out
                    </div>
        `
      } else {
        userProfileBtn.style.display = "none"
        console.log("No such document!");
      }
      
    } else {
      // User is signed out
      // ...
    }
  });