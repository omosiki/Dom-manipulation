const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const form = document.querySelector("#form")
const checkBox = document.querySelector("#checkboxG")
form.addEventListener("submit", function(Event){
    Event.preventDefault();
    colloctedData()
})
function colloctedData(){
    const data = {
        fullnameA: fullname.value,
        emailA: email.value,
        passwordA: password.value,
        confirmPasswordA: confirmPassword.value,
           checkboxValue : checkBox.checked
    }
    console.log(data)
    return data

}