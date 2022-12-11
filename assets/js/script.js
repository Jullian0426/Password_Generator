// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


// Give user prompts for password criteria
function generatePassword() {
  var characters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '0123456789', '\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~'];
  var result = '';

  // Ask user for password length
  var length = window.prompt("Set the Password Length. At least 8 but no more than 128.")
  
  // Test if user input is valid
  const isANumber = /^\d+$/.test(length);
  if (!isANumber || length < 8 || length > 128) {
    window.alert("Please Try Again")
    return;
  }
  
  // Ask user what characters to include
  var uppercase = window.confirm("Include uppercase? OK for yes, Cancel for no.")
  if (!uppercase) {
    characters.splice(0, 1, '');
  }

  var lowercase = window.confirm("Include lowercase? OK for yes, Cancel for no.")
  if (!lowercase) {
    characters.splice(1, 1, '');
  }

  var numbers = window.confirm("Include numbers? OK for yes, Cancel for no.")
  if (!numbers) {
    characters.splice(2, 1, '');
  }

  var specials = window.confirm("Include special characters? OK for yes, Cancel for no.")
  if (!specials) {
    characters.splice(3, 1, '');
  }

  //Join all characters together in one string
  characters = characters.join('')

  //Display error if no character types are selected
  if (characters === '') {
    window.alert("Please Try Again")
    return;
  }

  // Randomly generate a string based on user input
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Write password to the #password input
  var passwordText = document.querySelector("#password");
  passwordText.value = result;

}

