const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const prefColor = prompt("Inserisci il tuo colore preferito");
const numberInput = prompt("Inserisci due numeri separati da una virgola");


const numbers = numberInput.split(",").map((num) => parseFloat(num));


if (
  numbers.length === 2 &&
  !isNaN(numbers[0]) &&
  !isNaN(numbers[1]) &&
  numbers[1] !== 0
) {
  const divisionResult = numbers[0] / numbers[1]; 
 
  const passw = firstName + lastName + prefColor + divisionResult;
  document.getElementById("passw").innerHTML = passw;
} else {
  document.getElementById("passw").innerHTML ="Hai inserito valori non validi o hai tentato di dividere per zero.";
}



