// Prendo gli elementi che servono dal DOM
const rispostaEl = document.getElementById("risposta");
const verificaBtn = document.getElementById("verifica");
const esitoEl = document.getElementById("esito");

//aggiungo un listener al click del bottone Verifica
verificaBtn.addEventListener("click", function() {
    const risposta = rispostaEl.value.trim();  //leggo e pulisco il valore


    //Verifico la risposta
if (risposta === "4") {
    esitoEl.textContent = "Corretto!";
    esitoEl.style.color = "green";

} else {
    esitoEl.textContent = "Sbagliato, riprova.";
    esitoEl.style.color = "red";

                       }

});