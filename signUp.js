
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
document.addEventListener("DOMContentLoaded", ()=>{
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
        icon: "error",
        title: "password do not match",
        showConfirmButton: false,
        timer: 2000
    });
    return
    }
    if(!checkBox.checked){
        // blurt("Please agree to the terms")
        Swal.fire({
            icon:"error",
            title: "Please agree to the terms",
            showConfirmButton: false,
            timer: 2000
        })
        return
    }
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,
             email.value,
              password.value
            );
        // alert("Account Created successfully!!")
         Swal.fire({
            icon:"success",
            title: "Account Created Successfully",
            showConfirmButton: false,
            timer: 2000
        })
        console.log(userCredential.user)
        form.reset()
        // Rediret to login demo
          setTimeout(()=>{
          const goLogin = document.getElementById("goLogin")
        goLogin.addEventListener("click", function(e){
        e.preventDefault();
          window.location.href = "index.html";
    })

        },2000)
        
        // alert("comgrat")
    }catch(error){
        alert(error.message)
    }

})
    


})




   