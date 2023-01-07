
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


var selectedCharacters = []
var passwordLength = [];

function getPasswordOptions() {
  var passwordLength = prompt(
    'How many characters would you like your password to be?'
  );
  while (passwordLength < 10 || passwordLength > 64) {
    alert('Please choose a password length between 10 and 65 characters.');
    passwordLength = prompt(
      'How many characters would you like your password to be?');
  }
  // Ask user which character types they want to use in the password
  let useLowercase = confirm('Include lowercase characters in the password?');
  let useUppercase = confirm('Include uppercase characters in the password?');
  let useNumeric = confirm('Include numeric characters in the password?');
  let useSpecial = confirm('Include special characters in the password?');
  while (!useLowercase && !useUppercase && !useNumeric && !useSpecial && !useSpecial) {
    alert('Please choose at least one character type.');
    useLowercase = confirm('Include lowercase characters in the password?');
    useUppercase = confirm('Include uppercase characters in the password?');
    useNumeric = confirm('Include numeric characters in the password?');
    useSpecial = confirm('Include special characters in the password?');
  }
  // create selectedCharacters array
  let selectedCharacters = []
  // add the selected characters to the selectedCharacter array
  if (useLowercase) {
    selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
  }
  if (useUppercase) {
    selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
  }
  if (useNumeric) {
    selectedCharacters = selectedCharacters.concat(numericCharacters);
  }
  if (useSpecial) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }
      return (selectedCharacters);
}

passwordOptions = getPasswordOptions()

// console.log(passwordOptions);
// console.log(passwordLength);

// Generate password
function generatePassword(arr, num ) {
  let selected = [];
  for (let i = 0; i < num; i++) {
    let index = Math.floor(Math.random() * arr.length);
    selected.push(arr[index]);
    arr.splice(index, 1);
  }
  return selected;
}

// Run password generate function
// let password = generatePassword(passwordOptions, 50);
// console.log(password);
 
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordOptions, 50);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



