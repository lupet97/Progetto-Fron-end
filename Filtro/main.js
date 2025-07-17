// seleziona tutti i bottoni filtro
const filtri = document.querySelectorAll(".filtro"); // aggiunto il punto per selezionare la classe
const cards = document.querySelectorAll(".card");    // aggiunto il punto per selezionare la classe

// aggiungi evento click ad ogni bottone
filtri.forEach(bottone => {
    bottone.addEventListener("click", () => {
        const tech = bottone.dataset.tecnologia; // legge il valore di data-tecnologia

        cards.forEach(card => {
            //se il filtro è impostato su tutti allora mostra tutte le card
            if (tech === "tutti") {
                card.classList.remove("nascosto");
            } else {
                // mostriamo solo le card che hanno la classe corrispondente alla tecnologia selezionata
                if (card.classList.contains(tech)) {
                    card.classList.remove("nascosto");
                } else {
                    card.classList.add("nascosto");
                }
            }
        });
    });
});
