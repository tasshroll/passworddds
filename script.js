// REQUIREMENTS
// User Story
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// 1) GET user CRITERIA

// 2) Build a string, charSet, holding the possible characters the user wants

// 3) GET PASSWORD LENGTH
// What length do you want for your new password (8-128? User inputs length.

// 4) GENERATE PASSWORD, newPswd from charSet
// for let i=0, i<length, i++ {
//   newPswd[i] = randomPick from charSet;

// 5) DISPLAY newPswd on screen

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters 


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*When user clicks button, ask them for length and ask them to
Check all that they want to apply to the new password</h3>
X Lowercase letters a,b,c,d,e,f,g,h,I,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
X Uppercase letters A,B,C,DD,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
X Numeric 0,1,2,3,4,5,6,7,8,9
X Special Characters !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
*/

function generatePassword() {
  var password = "";
  var length = 0;
  var validcharset, lowercase, uppercase, numeric, special = false;
  var charset = ""; /* Valid charSet to make new password with */

  // Check that password is between 8-128 in length
  function validatelength() {
    while (length < 8 || length > 128) {
      alert("Password must be between 8-128 in length. Try again.")
      passwordLength = prompt("How long would you like your password?");
      length = parseInt(passwordLength);
    }
  }


  // Ask user to input length of the password
  function askforpasswordlength() {
    var passwordLength = prompt("How long would you like your password? Must be 8-128 in length");
    if (passwordLength = null) {
      length = 8;
    } else {
      length = parseInt(passwordLength);
    }
    validatelength();
  }


  // Ask user to choose what type of characters they want for password
  function askforcharset() {
    // WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    while (!validcharset) {
      lowercase = confirm("Do you want lowercase?");
      uppercase = confirm("Do you want uppercase?");
      numeric = confirm("Do you want numeric?");
      special = confirm("Do you want special?");

      if (lowercase | uppercase | numeric | special) {
        console.log("Criteria is valid.")
        validcharset = true;
        return;
      }
      else {
        alert("At least one criteria must be chosen. Try again.")
      }
    }
  }


  function determinecharset() {
    // Build the character set to pick from based on user selections
    // .checked is a psuedo class
    if (lowercase) {
      console.log("lowercase checked");
      charset = charset + "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
      console.log("uppercase checked");
      charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numeric) {
      console.log("numeric checked");
      charset = charset + "0123456789";
    }
    if (special) {
      console.log("special checked");
      charset = charset + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }
    console.log("charset =", charset)
  }


  function buildpassword() {
    // Generate the password
    console.log("In buildpasswordd");
    for (let i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
      console.log("password is", password);
    }
  }

  // generatePassword calls inner-Functions to generate new password
  askforpasswordlength();
  validatelength();
  askforcharset();
  determinecharset();
  buildpassword();
  return password;
}

