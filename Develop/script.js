// Assignment Code
var generateBtn = document.querySelector("#generate");

function displaychoices () {
  console.log ("Function displayChoices: Display choices");
  console.log ("Display checkbox selections to user screen");
  // div id=chheckboxes in html
  const chheckboxesDiv=document.getElementById('checkboxes')
  console.log ("Value of checkboxesDiv is", chheckboxesDiv)
}

function generatePassword () {
  var charset = ""; /* Valid charSet to make new password with */
  
  //Output to debug 
  console.log ("Function generatePassword: Building a password");
  
	// Check if at least one checkbox is checked
  // If not lowercase_checked & not uppercase_checked & not numeric_checked & not special_checked then
  //     "Please select at least 1 criteria

    // Build the character set to pick from based on user selections
	if (lowercase.checked) {
    console.log("lowercase checked");
		charset = charset + "abcdefghijklmnopqrstuvwxyz";
	}
	if (uppercase.checked) {
    console.log("uppercase checked");
		charset = charset +  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	if (numeric.checked) {
    console.log("numeric checked");
    charset =  charset + "0123456789";
	}
	if (special.checked) {
    console.log("special checked");
		charset = charset + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
	}
  console.log("charset =", charset)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// if generateBtn {
//   console.log ("Display Checkbox choices");
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// if generateBtn.addEventListener=click {
//   console.log ("Detected User clicked button");
// }
