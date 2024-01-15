/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.


Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

*/

// PAROLA PALIDDROMA



//Chiedere all'utente la parola


function reversedParola(parolaArray){
    let parolaInserita = prompt("Inserisci la parola palidroma", "parola");
    parolaArray = Array.from(parolaInserita)
    
    for (let i = parolaArray.length - 1; i >= 0; i--) {
        const reversedArray = parolaArray[i]
        console.log(reversedArray);
    }
}

console.log(reversedParola);



/*
function reversedParola(parolaArray){
    let parolaInserita = prompt("Inserisci la parola palidroma", "parola");
    parolaArray = Array.from(parolaInserita)
    
    for (let i = parolaArray.length - 1; i >= 0; i--) {
        const reversedArray = parolaArray[i]
    }
}

console.log(reversedParola);
*/




