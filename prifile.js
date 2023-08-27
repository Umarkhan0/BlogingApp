import { auth, onAuthStateChanged, doc, db, getDoc, signOut, updateEmail, reauthenticateWithCredential, EmailAuthProvider, storage, ref, uploadBytesResumable, getDownloadURL, updateDoc } from './firebase.js';
let spinnerpic = document.querySelector(".loading")
let cameraIcon = document.querySelector(".bi-camera-fill");
let emailInput = document.querySelector(".email-input");
let nameInput = document.querySelector(".name-input");
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;




        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let propicture = document.querySelector(".pro-img")
            propicture.src = docSnap.data().images
            emailInput.value = docSnap.data().email
            nameInput.value = docSnap.data().name
            let profileImg = document.querySelector("#fileInput");
            profileImg && profileImg.addEventListener("change", () => {
                console.log(profileImg.files.name = `${docSnap.data().name}.png`)


                if (profileImg.files[0].type == "image/png" || profileImg.files[0].type == "image/jpeg") {

                    const mountainImagesRef = ref(storage, profileImg.files.name = `${docSnap.data().name}.png`);

                    const uploadTask = uploadBytesResumable(mountainImagesRef, profileImg.files[0]);


                    uploadTask.on('state_changed',
                        (snapshot) => {
                            spinnerpic.style.display = "flex"
                            cameraIcon.style.display = 'none'
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is ' + progress + '% done');
                            switch (snapshot.state) {
                                case 'paused':
                                    console.log('Upload is paused');
                                    break;
                                case 'running':
                                    console.log('Upload is running');
                                    break;
                            }
                        },
                        (error) => {
                            console.log(error)
                        },
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

                                propicture.src = URL.createObjectURL(profileImg.files[0]);
                                console.log('File available at', downloadURL);
                                spinnerpic.style.display = "none"
                                cameraIcon.style.display = 'block';


                            });
                        });
                } else {
                    swal("Oops", "Rong picture", "error")
                }
            });
        } else {
            console.log("No such document!");
        };


        let updateFun = async () => {
            // const user = auth.currentUser;
            let newEmail = document.querySelector(".email-input").value
let emailUpdation = () => {
if(user.email != newEmail){
    swal({
        content: {
            element: "input",
            attributes: {
                placeholder: "Type your password",
                type: "password",
            },
        },
    }).then(async(value) => {
       
        if (value) {
      
            try {
                const user = auth.currentUser;
                const credential = EmailAuthProvider.credential(user.email, value);
                await reauthenticateWithCredential(user, credential);
                await updateEmail(user, newEmail);

                const washingtonRef = doc(db, "users", user.uid)
                await updateDoc(washingtonRef, {
                    email: newEmail
                });

                swal({
                    icon: "success",
                  });

            } catch (error) {
                console.log(error)
                swal ( "Oops" ,  "Rong password" ,  "error" ).then(() =>{
                emailUpdation()
                    
                })
            }


        } else {
            // User clicked cancel or didn't provide any input
            console.log("No input provided");
        }
    });

        }
    }
    emailUpdation()

            if (nameInput.value.length >= 4) {
                const washingtonRef = doc(db, "users", user.uid)
                await updateDoc(washingtonRef, {
                    name: nameInput.value
                });
                document.querySelector(".error-name").style.display = "none";
            } else {
                document.querySelector(".error-name").style.display = "block";

            }

        }
        let conformBtn = document.getElementById("update");
        conformBtn.addEventListener('click', updateFun)


    } else {

        console.log("sign out")
    };
});
// Display a Swal input prompt


// https://firebasestorage.googleapis.com/v0/b/blogweb-f23ae.appspot.com/o/qwej.png?alt=media&token=20c4313a-b4ef-413f-965f-28f0ac7b2130
// https://firebasestorage.googleapis.com/v0/b/blogweb-f23ae.appspot.com/o/qwej.png?alt=media&token=20c4313a-b4ef-413f-965f-28f0ac7b2130
// https://firebasestorage.googleapis.com/v0/b/blogweb-f23ae.appspot.com/o/qwej.png?alt=media&token=20c4313a-b4ef-413f-965f-28f0ac7b2130