let generateBtn = document.getElementById('generate');
// document.querySelector("#generate").addEventListener("click", writePassword);//can also be written shorter

//Arrays of all characters
let numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowLttrArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppLttrArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let specialCharac = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '/', '?', '~', ',', '<', '>', '.']

//naming variables
// let lengthPsswd; //empty variables for now
// let confirmSpecCharac;
// let confirmNumCharac;
// let confirmLowLttrCharac;
// let confirmUppLttrCharac;

function generatePassword() {
    // console.log('Button works!') //btn works,
    let lengthPsswd = prompt('Please choose length of Password. Length must be more than 8 and less than 30.');

    //Loop for question to be repeated if user doesn't comply with requested amount, validation
    if ((parseInt(lengthPsswd) >= 8) && parseInt(lengthPsswd) <= 30) {//parse int will make a string into a number
        alert(`Your password will have a length of ${lengthPsswd} characters.`); //alert will be of whatever the user chose

        // named variables with confirm prompt questions
        let confirmLowLttrCharac = confirm('Would you like Lower Case characters in your password?');
        let confirmUppLttrCharac = confirm('Would you like Upper Case characters in your password?');
        let confirmNumCharac = confirm('Would you like numeric characters in your Password?');
        let confirmSpecCharac = confirm('Would you like special characters in your password?');

        if ((confirmLowLttrCharac) || (confirmUppLttrCharac) || (confirmNumCharac) || (confirmSpecCharac)) { //must be validated as true for any chosen as truthee
            // console.log("chose character.");
        }
        if ((!confirmLowLttrCharac) && (!confirmUppLttrCharac) && (!confirmNumCharac) && (!confirmSpecCharac)) {
            alert("Please choose at least ONE special character for password.")
        }


        let chooseCharac = []; //all characters are in this one array.

        if (confirmLowLttrCharac) {
            chooseCharac = chooseCharac.concat(lowLttrArr); //what ever is in lowLttrArr, any one of the characters, will be taken and used for lower letters.
        }
        // console.log(confirmLowLttrCharac);

        if (confirmUppLttrCharac) {
            chooseCharac = chooseCharac.concat(uppLttrArr);
        }
        // console.log(confirmUppLttrCharac);

        if (confirmNumCharac) {
            chooseCharac = chooseCharac.concat(numArr);
        }
        // console.log(confirmNumCharac);

        if (confirmSpecCharac) {
            chooseCharac = chooseCharac.concat(specialCharac);
        }
        // console.log(confirmSpecCharac);

        // console.log(chooseCharac);//will show all characters from 0-80. length being 81

        let completedPassword = ""; //the output will be string
        for (var i = 0; i < lengthPsswd; i++) {
            completedPassword = completedPassword + chooseCharac[Math.floor(Math.random() * chooseCharac.length)];//any random character in the above arrays.
            console.log(completedPassword);// in total what the password will have.
        }

        return completedPassword;

    }
    else {
        //repeats once more the question
        alert("Password length must be between 8-30 characters. Please try again.")
        generatePassword();
        //return; //to stop this execution aka Recurssion(?)
    }
}

function writePassword() { //function that will call password maker
    var password = generatePassword(); //calling function declaration that is yet to be written/ or is written.
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword); //calling function and connecting btn