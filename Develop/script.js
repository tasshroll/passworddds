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






/*Check all that you want to apply to your new password</h3>

/* X Lowercase letters a,b,c,d,e,f,g,h,I,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
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
  function askpasswordlength() {
    var passwordLength = prompt("How long would you like your password? Must be 8-128 in length");
    length = parseInt(passwordLength);
    validatelength();
  }


  // Ask user to choose what type of characters they want for password
  function askcharset() {
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
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
      console.log("password is", password);
    }
  }

  // Call Functions to generate new password
  askpasswordlength();
  validatelength();
  askcharset();
  determinecharset();
  buildpassword();
  return password;
}

