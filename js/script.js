//esercizio: palindromi
var word = prompt("Digitare una parola");

//check if the input is not empty
if((!word)) {
    alert("Il campo non può essere vuoto. Ricarica la pagina e digita una parola.")
}

function palindromi(word) { 
    word = word.toLowerCase();
    var test = word.split("").reverse().join("");
    if(word === test) {
        alert("La parola inserita è palindroma.");
    } else {
        alert("La parola inserita non è palindroma.");
    }        
}

palindromi(word);

//versione base: crea una funzione con for da usare invece di split, reverse,
/*function reverse(word) {
    var arr = [];
    word = word.toLowerCase();

    for(var i = 0; i < word.length; i++) {
        arr.unshift(word[i]);
    }

    return arr.join("");       
}
*/


// ------------------------

//esercizio: pari e dispari

//input from the user: odd or even?
var userSide = prompt("Pari o dispari?");
var userNumber = 0;
var computerNumber = 0;
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function evenNum(num) {
    return num%2 === 0;
}                   

//testing user input
if(!/pari|dispari/i.test(userSide)) {
    alert("Puoi inserire solo pari o dispari, altri valori non sono accettati. Ricarica la pagina per riprovare.");
} else {
    // input from the user: number
    userNumber = parseInt(prompt("Digita un numero intero fra 1 e 5"));

    // checking input
    if(!typeof userNumber === "number" && userNumber >= 1 && userNumber <= 5) {
        alert("Puoi inserire solo numeri interi fra 1 e 5. Ricarica la pagina per riprovare.");
    } else {
        computerNumber = randomNumber(1, 5);
        var sum = computerNumber + userNumber;

        // check if the user's guess is correct
        if( (evenNum(sum) && /^pari$/i.test(userSide)) || (!evenNum(sum) && !/^pari$/i.test(userSide)) ) {
            alert(`Hai scelto ${userSide} e il numero ${userNumber}, il computer ha scelto il numero ${computerNumber}. La somma è ${sum}: hai vinto!` )
        } else {
            alert(`Hai scelto ${userSide} e il numero ${userNumber}, il computer ha scelto il numero ${computerNumber}. La somma è ${sum}: hai perso.` )
        }
    }
}

/* 
//Soluzione migliore (by Domenico G.)
//semplificazione anche perché mancano i checking points
// chiedo all'utente un numero da 1 a 5, e di scegliere pario o dispari
var evenOddUser = prompt('Scegli fra pari o dispari');
var userNumb = parseInt(prompt('Inserisci un numero da 1 a 5'));

// creo una funzione per generare un numero
function random(min, max){
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// sommo i due numeri
var somma = userNumb + random(1,5);

// creo una funzione per stabilire se il numero è pari o dispari
function evenOdd(somma){
  if (somma % 2 === 0) {
    return 'pari';
  } else {
    return 'dispari';
  }
}

// confronto i risultati e indico chi ha vinto
if (evenOddUser == evenOdd(somma)) {
  alert('hai vinto')
} else {
  alert('Hai perso')


*/

