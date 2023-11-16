var a = -1;                                                                //Setto una variabile a per controllare gli elementi della votazione
const stars_1 = document.getElementById("feedbackStars").children;        //Seleziono tutti i figli del div nominato "feedbackStars" (tag img)
const stars = Array.from(stars_1);
                                                                            
const newRate = function (c) {
    for (let i = 0; i<=c; i++) {                                      //In base ala valora "c" ciclo l'array e assegno l'immagine della stella a tutti gli elementi fino a "c"
        stars[i].src = "Assets/images/star.svg";
        stars[i].alt = "stellina";
    }
    for (let i = c+1; i<stars.length; i++) {                        //Per tutti gli elementi dopo "c" elimino l'immagine della stella in modo da "spegnerle"
        stars[i].src = "Assets/images/blackStar.svg";              
        stars[i].alt = "stellinaNera";
    }
}

const newMomentaryRate = function (e) {                                       //Funzione che permette una evidenziazione momentanea delle stelle
    b = stars.findIndex((star) => {return star === e.target})              //Utilizzo il "target" di "e" per assegnare l'index della stella dell'array "stars", su cui sono, alla variabile "b"
    for (let i = 0; i<=b; i++) {                                          //In base ala valora "b" ciclo l'array e assegno l'immagine della stella a tutti gli elementi fino a "b"
        stars[i].src = "Assets/images/star.svg";
        stars[i].alt = "stellina";
    }
    for (let i = b+1; i<stars.length; i++) {                            //Per tutti gli elementi dopo "c" elimino l'immagine della stella in modo da "spegnerle"
        stars[i].src = "Assets/images/blackStar.svg";
        stars[i].alt = "stellinaNera";
    }
}

const makeStarsResponsive = function () {                                              //Una funzione per aggiungere gli "EventListener" alle stelle
    for (let i = 0; i<stars.length; i++) {
        stars[i].addEventListener("click", function (e) {                             //Aggiungo "EventListener"  "click" a tutti gli elementi dell'array "stars" che userà la funzione che ha come parametro un evento
            console.log("Heyyy");
            a = stars.findIndex((star) => {return star === e.target})                //Con questa funzione 1) Assegno alla variabile "a" l'index della stella sulla quale pongo il mio target
            newRate(a);                                                             //                     2) Lancio la funzione "newRate(a)" con il parametro "a"
            console.log(a);
        });
        stars[i].addEventListener("mouseover", newMomentaryRate);                 //                       3)Aggiungo "mouseover" che lancia la funzione "newMomentaryRate" e "mouseout" che lancia "newRate(a)"
        stars[i].addEventListener("mouseout", function () {
            console.log("ABB");
            newRate(a);
        });
    }
}

makeStarsResponsive();                                                          //Lancio la funzione "makeStarsResponsive()" all'avvio della pagina
