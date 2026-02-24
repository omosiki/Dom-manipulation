 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import {getAuth, signInWithEmailAndPassword }from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
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


// Handle login form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", async function(e){
    e.preventDefault()
    // Get email and password input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Email:", email)
    console.log("password:", password)

    // Simple validation
    
    if(!email || !password){
          Swal.fire({
            icon:"error",
            title: "Enter email and password",
            showConfirmButton: false,
            timer: 2000
        })
        return;
    }
    try{
        // firebase checked if email and password exist
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        Swal.fire({
            icon:"success",
            title: "Login successfully",
            showConfirmButton: false,
        });
          console.log("logged in user", userCredential.user)
           form.reset()

        setTimeout(()=>{
        window.location.href = "dashboard.html"
        },2000)
    }catch{
        // Wrong email or password will trigger this
        Swal.fire({
            icon: "error",
            title:"Invalid email or password"
        });
    }
  
    // Redirect to dashboard
   
});
    const goSignUp = document.getElementById("goSignUp");
    goSignUp.addEventListener("click", function(e){
        e.preventDefault()
        window.location.href = "signup.html"
    })
})