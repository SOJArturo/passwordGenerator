// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  continuar = true;
  var longitud = prompt("Enter password length (between 8 and 128 characters)");
  if (longitud < 8 || longitud > 128){
    alert("Please enter a valid length.  Reload the page to try again");
    return;
  }
  var minusculas = prompt("Include lowercase letters? (y/n)");
  if (minusculas === 'y'){
    var numMinusculas = 1;
  }
  else if (minusculas === 'n'){
    var numMinusculas = 0;
  }
  else {
    alert("Please enter 'y' or 'n'.  Reload the page to try again")
    return;
  }
  var mayusculas = prompt("Include uppercase letters? (y/n)");
  if (mayusculas === 'y'){
    var numMayusculas = 1;
  }
  else if (mayusculas === 'n'){
    var numMayusculas = 0;
  }
  else {
    alert("Please enter 'y' or 'n'.  Reload the page to try again")
    return;
  }
  var numeros = prompt("Include numbers? (y/n)");
  if (numeros === 'y'){
    var numNumeros = 1;
  }
  else if (numeros === 'n'){
    var numNumeros = 0;
  }
  else {
    alert("Please enter 'y' or 'n'.  Reload the page to try again")
    return;
  }
  var especiales = prompt("Include special characters? (y/n)");
  if(especiales === 'y'){
    var numEspeciales = 1;
  }
  else if(especiales === 'n'){
    var numEspeciales = 0;
  }
  else {
    alert("Please enter 'y' or 'n'.  Reload the page to try again")
    return;
  }
  var criterios = numMinusculas + numMayusculas + numNumeros + numEspeciales;
  if (criterios < 1){
    alert("Enter at least one valid criterion. Reload the page to try again.")
    return;
  }
  numMinusculas = Math.floor(longitud / criterios) * numMinusculas;
  numMayusculas = Math.floor(longitud / criterios) * numMayusculas;
  numNumeros = Math.floor(longitud / criterios) * numNumeros;
  numEspeciales = Math.floor(longitud / criterios) * numEspeciales;
  criterios = numMinusculas + numMayusculas + numNumeros + numEspeciales;
  while (criterios < longitud){
    if (numMinusculas !== 0){
      numMinusculas++;
    }
    criterios++
  }
  while (criterios < longitud){
    if (numMayusculas !== 0){
      numMayusculas++
    }
    criterios++
  }
  while (criterios < longitud){
    if (numNumeros !== 0){
      numNumeros++
    }
    criterios++
  }
  while (criterios < longitud){
    if (numEspeciales !== 0){
      numEspeciales++
    }
    criterios++;
  }
  var Mayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var Minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var Numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var Especiales = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var contrasena = '';
  for (var i = 0; i < numMinusculas; i++){
    contrasena += Minusculas[Math.floor(Math.random() * 25)];
  }
  for (var i = 0; i < numMayusculas; i++){
    contrasena += Mayusculas[Math.floor(Math.random() * 25)];
  }
  for (var i = 0; i < numNumeros; i++){
    contrasena += Numeros[Math.floor(Math.random() * 10)];
  }
  for (var i = 0; i < numEspeciales; i++){
    contrasena += Especiales[Math.floor(Math.random() * 30)];
  }

  var shuffled = contrasena.split('').sort(function(){return 0.5-Math.random()}).join('');
  return shuffled
}

writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
