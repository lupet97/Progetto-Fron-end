const input = document.getElementById("input-elemento");
const aggiungiBtn = document.getElementById("aggiungi");
const messaggio = document.getElementById("messaggio");
const lista = document.getElementById("lista");
const contatore = document.getElementById("contatore");

function aggiornaContatore() {
    const elementi = lista.querySelectorAll("li").length; // conta quanti <li> ci sono nella lista
    contatore.textContent = `Hai ${elementi} cosa${elementi !== 1 ? "e" : ""} nella lista.`; // gestisce il plurale
}

aggiungiBtn.addEventListener("click", function () {
    const testo = input.value.trim(); // prende il valore scritto nel campo input e rimuove gli spazi ai lati

    if (testo === "") {
        messaggio.textContent = "Inserisci qualcosa!!!";
        return;
    }

    messaggio.textContent = ""; // pulisce eventuali messaggi

    const li = document.createElement("li");
    li.textContent = testo; // creo un nuovo <li> e scrivo dentro il testo inserito dall'utente
    
    // Cliccando sull'elemento lo rimuovi
    li.addEventListener("click", function () {
        lista.removeChild(li); // rimuove il <li> cliccato
        aggiornaContatore();
    });

    lista.appendChild(li); // inserisce l'elemento creato nel contenitore <ul>

    input.value = ""; // svuota il campo input
    aggiornaContatore();
});
