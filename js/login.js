

// function resultfunction()
// {
//     var inputbox1=document.getElementById("input1").value;
// var inputbox2=document.getElementById("input2").value;
// var inputbox3=document.getElementById("input3").value;

// console.log(inputbox1);
    
//     // console.log(value2)
//     // console.log(value3)
//     // var result=
//     // value3.textContent=

// }


// login.js

// Function to handle form submission
function resultFunction(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the values from the input fields
    var username = document.getElementById("input1").value;
    var password = document.getElementById("input2").value;

    // Log the username and password to the console
    console.log("UserName: " + username);
    console.log("Password: " + password);
    if(username.length < 2){
        alert(`UserName must be above 5 charters`)
    }
    else if(password.length < 8){
        alert(`passwort must be 8 charters`)
    } else{
        alert(`UserName : ${username}\n  Password: ${password}\n Successfull.`)
    }
    
}
