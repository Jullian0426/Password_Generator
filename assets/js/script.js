// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~';
var result = '';


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Generates Password when button is clicked
function generatePassword(length) {

  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Write password to the #password input
  var passwordText = document.querySelector("#password");
  passwordText.value = result;

}

generatePassword(10);