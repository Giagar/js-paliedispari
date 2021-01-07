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

        // check if the user's guess is right
        if( (evenNum(sum) && /^pari$/i.test(userSide)) || (!evenNum(sum) && !/^pari$/i.test(userSide)) ) {
            alert(`Hai scelto ${userSide} e il numero ${userNumber}, il computer ha scelto il numero ${computerNumber}. La somma è ${sum}: hai vinto!` )
        } else {
            alert(`Hai scelto ${userSide} e il numero ${userNumber}, il computer ha scelto il numero ${computerNumber}. La somma è ${sum}: hai perso.` )
        }
    }
}

