// Handle login form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
form.addEventListener("submit", function(e){
    e.preventDefault()
    // Get email and password input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Email:", email)
    console.log("password:", password)

    // Simple validation
    
    if(email && password){
          Swal.fire({
            icon:"success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 2000
        })
    }else{
        Swal.fire({
                icon:"error",
                title: "Please enter email and password"
            });
    }
    form.reset()
});

    // link to signUp demo
    document.getElementById("goSignUp").addEventListener("click", function(e){
        e.preventDefault();
        window.location.href = "signup.html"
    })
})