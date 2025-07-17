// Riferimento al form e al paragrafo risultato 
const form = document.getElementById("form-contatto");
const risultato = document.getElementById("risultato");

// Quando l'utente invia il form
form.addEventListener("submit", function(event){
    event.preventDefault();    //evita il refresh della pagina


//Leggere i valori inseriti nei campi
const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();
const messaggio = document.getElementById("messaggio").value.trim();

// Se un campo è vuoto allora devi mostrare un messaggio di errore

if (!nome||!email||!messaggio) {
    risultato.textContent = "Compila per favore tutti i campi";
    risultato.style.color = "red";
    return;
}

//Altrimenti mostra messaggio di conferma

risultato.textContent = `Grazie ${nome}, il tuo messaggio è stato inviato correttamente!`;
risultato.style.color = "green";

//Pulizia campi
form.reset();

});