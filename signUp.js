
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword }from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
   // Your web app's Firebase configuration */
  const firebaseConfig = {
    apiKey: "AIzaSyDi9hYXionfkqd0iOadU5G4LyPXKH8zjps",
    authDomain: "loginsystenapp.firebaseapp.com",
    projectId: "loginsystenapp",
    storageBucket: "loginsystenapp.firebasestorage.app",
    messagingSenderId: "751291779661",
    appId: "1:751291779661:web:297a7ba1b3d001133aea04"
  };

  /* // Initialize Firebase */
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)


const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const form = document.querySelector("#form")
const checkBox = document.querySelector("#checkboxG")
form.addEventListener("submit", async function(Event){
    Event.preventDefault();
    // colloctedData()


    if (password.value !== confirmPassword.value){
        Swal.fire({
  icon: "success",
  title: "password do not match",
  showConfirmButton: false,
  timer: 2000
});
    }
    if(!checkBox.checked){
        blurt("Please agree to the terms")
 
    }
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,
             email.value,
              password.value,
              confirmPassword.value
            );
        alert("Account Created successfully!!")
        console.log(userCredential.user)
        form.reset()
        window.location.href = "logIn-form.html"
        // alert("comgrat")
    }catch(error){
        alert(error.message)
    }

})

// function colloctedData(){
//     const data = {
//         fullnameA: fullname.value,
//         emailA: email.value,
//         passwordA: password.value,
//         confirmPasswordA: confirmPassword.value,
//         checkboxValue : checkBox.checked
//     }
//     console.log(data)
//     return data