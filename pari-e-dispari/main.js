/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// Chiedere all'utente se sceglie pari o dispari
let sceltaUtente = prompt("Scegli tra pari o dispari")
console.log(`Hai scelto: ${sceltaUtente}`);

// Chiedere all'utente un numero da 1 a 5
let numUtente = Number(prompt("Scegli un numero tra 1 e 5"))
console.log(`Hai scelto: ${numUtente}`);


// Se il numero inserito dall'utente è valido
if(validation(numUtente)){

    // Generare numero random per il pc
    let numeroRan = randomNumb(1,5)
    console.log(`Il numero scelto dal pc è: ${numeroRan}`);
}



// Funzione per il numero generico scelto da PC
function randomNumb (min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Funzione per sapere se il numero è valido
