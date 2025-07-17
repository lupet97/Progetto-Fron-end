// Calcolatrice semplice

// Selezionare elementi numerici  e risultato

const n1El = document.getElementById("n1");
const n2El = document.getElementById("n2");
const resEl = document.getElementById("risultato");

// Funzione per ottenere i valori numerici

function getNumeri () {
    return[Number(n1El.value), Number(n2El.value)];
}

//Somma

document.getElementById("somma").addEventListener("click", function() {
    const [a,b] = getNumeri();
    resEl.textContent = a + b;
});


//Sottrazione

document.getElementById("sottrai").addEventListener("click", function() {
    const [a,b] = getNumeri();
    resEl.textContent = a - b;
});


//Moltiplicazione

document.getElementById("moltiplica").addEventListener("click", function() {
    const [a,b] = getNumeri();
    resEl.textContent = a * b;
});



//Divisione con controllo divisione per zero

document.getElementById("dividi").addEventListener("click", function() {
    const [a,b] = getNumeri();

    if (b === 0) {
        resEl.textContent = "Errore: divisione per zero!";
        return;
    }

    resEl.textContent = a / b;
});