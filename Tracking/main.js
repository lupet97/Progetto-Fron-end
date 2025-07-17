// Funzione per aggiornare il contatore per una sezione 
function tracciaVisita(id) {
    // ottieni le statistiche salvate in localStorage oppure crea un oggetto vuoto
    const stats = JSON.parse(localStorage.getItem("visite")) || {};

    // Incrementa il conteggio della sezione visitata
    stats[id] = (stats[id] || 0) + 1;

    // Salva di nuovo le statistiche aggiornate
    localStorage.setItem("visite", JSON.stringify(stats));
}

function mostraStatistiche() {
    const stats = JSON.parse(localStorage.getItem("visite")) || {};
    const lista = document.getElementById("statistiche");
    lista.innerHTML = ""; // Pulisce la lista per evitare duplicati

    for (let sezione in stats) {
        const li = document.createElement("li");
        li.textContent = `${sezione}: visitata ${stats[sezione]} volte`;
        lista.appendChild(li);
    }
}

// Monitorare le sezioni
const sezioni = document.querySelectorAll(".trackable");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {  // Se l'utente ha effettivamente visto la sezione
            const id = entry.target.id;
            tracciaVisita(id);      // Aggiorna il contatore per la sezione visibile
            mostraStatistiche();    // Aggiorna la lista visiva
        }
    });
}, {
    threshold: 0.6 // La sezione è considerata vista quando almeno il 60% è visibile
});

// Applica l'observer a tutte le sezioni 
sezioni.forEach(sezione => observer.observe(sezione));

// Mostra statistiche all'avvio
mostraStatistiche();
