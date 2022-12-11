// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", prompts);


var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~';
var result = '';


// Give user prompts for password criteria
function prompts() {
  // Ask user for password length
  var length = window.prompt("Set the Password Length. At least 8 but no more than 128.")
  
  // Test if user input is valid
  const isANumber = /^\d+$/.test(length);
  if (isANumber && length >= 8 && length <= 128) {
    window.alert("is a number")
  } else {
    window.alert("Please Try Again")
    return;
  }
  
  var lowercase = window.confirm("Include lowercase? OK for yes, Cancel for no.")

  // Ask user what characters to include
}


// Randomly generate a string
function generatePassword(length) {

  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Write password to the #password input
  var passwordText = document.querySelector("#password");
  passwordText.value = result;

}

