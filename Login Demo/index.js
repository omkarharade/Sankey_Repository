const sampleEmail = "omkarh1234@gmail.pom";
const samplePassword = "Omkar@1234pom"


function emailValidator(email){

    
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

function checkEmailFunc(){
    const emailData =  document.getElementById("email").value;
    console.log(emailData)

    if(emailValidator(emailData)){
        document.getElementById("email-alert").innerText = "";
    }
    else{
        document.getElementById("email-alert").innerText = " email should include @ and . ";
    }
}

function loginBtnClick(){

    const emailData =  document.getElementById("email").value;
    const isValidEmail = emailValidator(emailData);
    console.log(isValidEmail)

    var passwordData = document.getElementById("password").value;
    var emailAlert = document.getElementById("email-alert");
    emailAlert.innerText = "";
    var passwordAlert = document.getElementById("password-alert");
    passwordAlert.innerText = "";

    if(isValidEmail){
        

        if(emailData == sampleEmail){
            // check password
            
            if(samplePassword == passwordData){
                // login successful
                console.log("login successful")
            }
            else{
                passwordAlert.innerText = "incorrect password"
            }
        }
        else{
            emailAlert.innerText = "email doesn't exist";
        }
    }
    else{
        emailAlert.innerText = "invalid email";
    }
}