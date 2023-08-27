import { auth, onAuthStateChanged, doc, db, getDoc, signOut } from './firebase.js';

let userProfileBtn = document.getElementById("user-name");
let lofOutBtn = document.getElementById("log-out-btn");
let nameBtn = document.querySelector(".name-btn");
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      userProfileBtn.textContent = docSnap.data().name
      lofOutBtn.innerHTML =
        console.log(userProfileBtn);
      lofOutBtn.innerHTML = `
        <div class="login-btn log-out-btn" id="login-btn">
                        LOG Out
                    </div>
        `;
      let logOutBtn = document.querySelector(".log-out-btn");
      logOutBtn.addEventListener('click', () => {
        signOut(auth).then(() => {
          window.location.reload()
        }).catch((error) => {
          console.log(error);
        });
      });
    } else {
      userProfileBtn.style.display = "none"
      console.log("No such document!");
    };

  } else {
    nameBtn.style.display = "none"
    console.log("sign out")
  };
});
let profileBtn = () => {
  window.location.assign("profile.html")
}
nameBtn.addEventListener('click', profileBtn)