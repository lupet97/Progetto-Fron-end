// Valore iniziale del contatore
let contatore = 0;

//Definisco due costanti per il limite superiore ed inferiore del contatore
const limite_min= -20;
const limite_max= 20;


// Seleziono l'elemento HTML dove mostrare il numero e i tre bottoni
const valoreEl = document.getElementById("valore-contatore");
const messaggioEl = document.getElementById("messaggio");

const btnIncrementa = document.getElementById("incrementa");
const btnDecrementa = document.getElementById("decrementa");
const btnResetta = document.getElementById("resetta");


// Funzione per aggiornare la visualizzazione del numero
function aggiornaContatore () {
    valoreEl.textContent = contatore;

    //Rimozione eventuali classi di colore precedenti
    valoreEl.classList.remove("positivo", "negativo", "zero");

    // Aggiunge il colore corretto 

    if (contatore > 0){
        valoreEl.classList.add("positivo");
    } else if(contatore < 0){
        valoreEl.classList.add("negativo");
    } else {
        valoreEl.classList.add("zero");
    }

    //Aggiunge animazione tipo rimbalzo alla variazione del valore

    valoreEl.classList.add("scalato");

    // Dopo 150s, rimuove la classe per resettare l'animazione
    setTimeout(() => {
        valoreEl.classList.remove("scalato");

    }, 150);

}

// Funzione per mostrare un messaggio temporaneo di limite raggiunto

function mostraMessaggio(testo) {
    messaggioEl.textContent = testo;

    // Dopo 2 secondi il messaggio scompare

    setTimeout(() => {
        messaggioEl.textContent = "";
    }, 2000);

}



// Quando clicco su +1 aumenta il contatore

btnIncrementa.addEventListener("click", function(){
    if (contatore < limite_max) {
    contatore++;
    aggiornaContatore();
    } else {
        mostraMessaggio(`Raggiunto il massimo (${limite_max})`);
    }
    
});

// Quando clicco su -1 diminuisce il contatore

btnDecrementa.addEventListener("click", function(){
    if (contatore > limite_min) {
    contatore--;
    aggiornaContatore();
    } else {
        mostraMessaggio(`Raggiunto il minimo (${limite_min})`);
    }
    
});

// Quando clicco su reset il contatore si azzera

btnResetta.addEventListener("click", function(){
    contatore = 0;
    aggiornaContatore();
});

