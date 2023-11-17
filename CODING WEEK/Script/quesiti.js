// Timer 60 secondi

var width = 200, //Specificano le dimensioni del contenitore SVG.
  height = 200,
  timePassed = 0, // tiene traccia del tempo trascorso.
  timeLimit = 60; //è il limite di tempo per il timer.

var fields = [
  {                      //Un array che che contiene i campi del timer ed una funzione update. 
    value: timeLimit,
    size: timeLimit,
    update: function () {
      return (timePassed = timePassed + 1);
    },
  },
];

var arc = d3.svg                     //L'arco del timer con un'area colorata proporzionale al tempo trascorso rispetto al tempo totale.
  .arc()
  .innerRadius(width / 3 - 20)      //Richiama la libreria d3 e usa l'oggetto arc (arco) [La variabile arc viene creata utilizzando D3.js per definire le proprietà dell'arco circolare.]
  .outerRadius(width / 3 - 10)     //Ampienza (spessore del cerchio)
  .startAngle(2 * Math.PI)        //Angolo di partenza 360°
  .endAngle(function (d) {
    return (d.value / d.size) * 2 * Math.PI; //Angolo di fine in base al tempo trascorso. Essendo che l'arco va diminuendo l'angolo si abbassa ad ogni secondo
  });

var svg = d3                //Seleziona l'elemento con la classe "container" e aggiunge un elemento SVG con larghezza e altezza specificate.
  .select(".container")
  .append("svg") 
  .attr("width", width)
  .attr("height", height);

var field = svg         //Utilizziamo le funzioni della libreria D3 per associare i dati e creare un gruppo all'interno dell'SVG per contenere gli elementi del timer
  .selectAll(".field") 
  .data(fields)        //I dati dell'array fields vengono associati al gruppo "g" all'interno dell'SVG.
  .enter()
  .append("g")        //append("g") inserisce nel gruppo "g" dell'SVG le forme (back e path) e i contenuti(label) 
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")  //.attr() permette di settare gli attributi di un elemento. In questo caso pone il centro del cerchio al centro del contenitore
  .attr("class", "field");

var back = field
  .append("path") //"back" e "path" vengono creati come percorsi di sfondo e primo piano, rispettivamente, utilizzando l'arco definito in precedenza.
  .attr("class", "path path--background")
  .attr("d", arc); //L'arributo ("d", arc) sta dicendo all'elemento <path> di utilizzare il percorso definito dalla funzione arc come il percorso grafico da disegnare. 

var path = field
  .append("path") //"back" e "path" vengono creati come percorsi di sfondo e primo piano, rispettivamente, utilizzando l'arco definito in precedenza.
  .attr("class", "path path--foreground");

var label = field  //Viene aggiunto un elemento di testo (<text>) per visualizzare il tempo rimanente
  .append("text") //"label" è un elemento di testo che visualizzerà il tempo rimanente.  Il metodo append() inserisce il contenuto specificato alla fine delll'elemento field
  .attr("class", "label")  
  .attr("dy", ".35em");    //L'attributo dy indica uno spostamento lungo l'asse y della posizione di un elemento o del suo contenuto.

console.log(fields);

function arcTween(b) {
  //La funzione arcTween viene utilizzata per transizioni fluide tra i valori dell'arco. Utilizza la funzione di interpolazione di D3.
  var i = d3.interpolate(
    {
      value: b.previous,
    },
    b
  );
  return function (t) {
    return arc(i(t));
  };
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
const resetTimer = function (a) {
  //Resetta il timer quando si passa alla domanda successiva
  timePassed = 0;
  update();
};
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Array delle domande
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is inheritance in object-oriented programming?",
    correct_answer:
      "The ability of a class to inherit attributes and methods from another class",
    incorrect_answers: [
      "The modification of an object's attributes during runtime",
      "The use of private variables within a class",
      "The ability of a class to hide implementation details",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is a 'kernel' in an operating system?",
    correct_answer:
      "The part of the operating system that manages hardware resources",
    incorrect_answers: [
      "A programming language used for OS development",
      "A library of common functions used by programs",
      "A type of file system",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which protocol is commonly used to send emails over the Internet?",
    correct_answer: "SMTP",
    incorrect_answers: ["FTP", "HTTP", "DHCP"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the acronym 'VPN' stand for?",
    correct_answer: "Virtual Private Network",
    incorrect_answers: [
      "Very Personal Network",
      "Virtual Public Network",
      "Visual Private Network",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which language is commonly used for Android app development?",
    correct_answer: "Java",
    incorrect_answers: ["Swift", "C#", "Python"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the acronym 'RAM' stand for?",
    correct_answer: "Random Access Memory",
    incorrect_answers: [
      "Read-Only Memory",
      "Remote Access Module",
      "Real-time Automated Memory",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language is mainly used for client-side web development?",
    correct_answer: "JavaScript",
    incorrect_answers: ["Python", "PHP", "Ruby"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is SQL used for?",
    correct_answer: "Querying and managing relational databases",
    incorrect_answers: [
      "A programming language",
      "An operating system",
      "A network protocol",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is the primary goal of supervised learning algorithms?",
    correct_answer: "Classifying or predicting based on labeled training data",
    incorrect_answers: [
      "Training a model without labels",
      "Training a model without supervision",
      "Improving the performance of an existing model without additional data",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is the purpose of the 'else' statement in programming?",
    correct_answer:
      "To specify a block of code to be executed when the condition in the 'if' statement is false",
    incorrect_answers: [
      "To terminate the program",
      "To create a loop",
      "To define a function",
    ],
  },
  {
    category: "Anime: One Piece",
    type: "single",
    difficulty: "easy",
    question: "Qual è il nome del protagonista principale di One Piece?",
    correct_answer: "Luffy",
    incorrect_answers: ["Zoro", "Sanji", "Nami"],
  },
  {
    category: "Anime: One Piece",
    type: "single",
    difficulty: "easy",
    question: "Quale frutto del diavolo mangia Luffy?",
    correct_answer: "Gomu Gomu no mi",
    incorrect_answers: ["Mera Mera no mi", "Ope Ope no mi", "Gura Gura no mi"],
  },
  {
    category: "Anime: One Piece",
    type: "single",
    difficulty: "easy",
    question: "Qual è il sogno di Luffy?",
    correct_answer: "Diventare il re dei pirati",
    incorrect_answers: [
      "Essere il più forte del mondo",
      "Diventare un rivoluzionario",
      "Essere un marine",
    ],
  },
  {
    category: "Anime: One Piece",
    type: "single",
    difficulty: "easy",
    question: "Chi è lo spadaccino della ciurma di Luffy?",
    correct_answer: "Roronoa Zoro",
    incorrect_answers: ["Sanji", "Trafalgar Law", "Marco"],
  },
  {
    category: "Anime: One Piece",
    type: "single",
    difficulty: "easy",
    question: "Qual è il nome della nave attuale di Luffy?",
    correct_answer: "Thousand Sunny",
    incorrect_answers: ["Going Merry", "Red Force", "Queen Mama Chanter"],
  },
  {
    category: "Anime: One Piece",
    type: "single",
    difficulty: "easy",
    question: "Chi è il cuoco della ciurma di Cappello di Paglia?",
    correct_answer: "Sanji",
    incorrect_answers: ["Nami", "Usopp", "Franky"],
  },
  {
    category: "Anime: One Piece",
    type: "single",
    difficulty: "easy",
    question: "Qual è la frase tipica di Luffy?",
    correct_answer: "Andiamo!",
    incorrect_answers: [
      "Ora ci divertiremo!",
      "Mi dispiace",
      "Non ho fame",
      "Andiamo!",
    ],
  },
  {
    category: "Anime: One Piece",
    type: "single",
    difficulty: "easy",
    question: "Qual è il Frutto del diavolo di Nico Robin?",
    correct_answer: "Hana Hana no mi",
    incorrect_answers: [
      "Bara Bara no Mi",
      "Kilo Kilo no Mi",
      "Bane Bane no Mi",
    ],
  },
  {
    category: "Anime: One Piece",
    type: "single",
    difficulty: "easy",
    question: "Qual è il nome del principale antagonista della serie?",
    correct_answer: "Marshall D. Teach",
    incorrect_answers: ["Akainu", "Kaido", "Barbabianca"],
  },
  {
    category: "Anime: One Piece",
    type: "single",
    difficulty: "easy",
    question: "Chi è il vice-capitano della ciurma di Cappello di Paglia?",
    correct_answer: "Roronoa Zoro",
    incorrect_answers: ["Sanji", "Nico Robin", "Usopp"],
  },

  {
    category: "Anime: One Piece",
    type: "multiple",
    difficulty: "medium",
    question: "Qual è lo stato nativo di Nami?",
    correct_answer: "Villaggio di Arlong",
    incorrect_answers: [
      "Villaggio di Loguetown",
      "Villaggio di Cocoyasi",
      "Villaggio di Shimotsuki",
    ],
  },
  {
    category: "Anime: One Piece",
    type: "multiple",
    difficulty: "medium",
    question: "Qual è il nome del padre di Portgas D. Ace?",
    correct_answer: "Gol D. Roger",
    incorrect_answers: [
      "Monkey D. Dragon",
      "Edward Newgate",
      "Silvers Rayleigh",
    ],
  },
  {
    category: "Anime: One Piece",
    type: "multiple",
    difficulty: "medium",
    question:
      "Chi ha sconfitto Bartholomew Kuma durante la Guerra di Marineford?",
    correct_answer: "Marshall D. Teach",
    incorrect_answers: ["Donquixote Doflamingo", "Boa Hancock", "Borsalino"],
  },
  {
    category: "Anime: One Piece",
    type: "multiple",
    difficulty: "medium",
    question: "Qual è la sigla che identifica la flotta di Capone Bege?",
    correct_answer: "Fire Tank Pirates",
    incorrect_answers: ["Sun Pirates", "Heart Pirates", "Barto Club"],
  },
  {
    category: "Anime: One Piece",
    type: "multiple",
    difficulty: "medium",
    question: "Qual è il vero nome del personaggio noto come Corazon?",
    correct_answer: "Donquixote Rosinante",
    incorrect_answers: ["Trafalgar Law", "Vergo", "Dellinger"],
  },
  {
    category: "Anime: One Piece",
    type: "multiple",
    difficulty: "medium",
    question:
      "In quale luogo è stato nascosto la Thousand Sunny durante il timeskip?",
    correct_answer: "Archipelago Sabaody",
    incorrect_answers: [
      "Isola degli uomini-pesce",
      "Punk Hazard",
      "Whole Cake Island",
    ],
  },
  {
    category: "Anime: One Piece",
    type: "multiple",
    difficulty: "medium",
    question: "Qual è la posizione di Sanji nella Germa 66?",
    correct_answer: "Terzo figlio",
    incorrect_answers: ["Secondo figlio", "Primo figlio", "Quarto figlio"],
  },
  {
    category: "Anime: One Piece",
    type: "multiple",
    difficulty: "medium",
    question: "Qual è il nome della spada di Tashigi?",
    correct_answer: "Shigure",
    incorrect_answers: ["Wado Ichimonji", "Sandai Kitetsu", "Yubashiri"],
  },
  {
    category: "Anime: One Piece",
    type: "multiple",
    difficulty: "medium",
    question: "Quale è l'abilità di Basil Hawkins nella serie?",
    correct_answer: "Wara Wara no Mi",
    incorrect_answers: [
      "Gomu Gomu no Mi",
      "Soru Soru no Mi",
      "Nikyu Nikyu no Mi",
    ],
  },
  {
    category: "Anime: One Piece",
    type: "multiple",
    difficulty: "medium",
    question:
      "Qual è il nome dell'isola in cui Luffy si é allenato dopo la guerra di Marineford?",
    correct_answer: "Isola delle Donne",
    incorrect_answers: [
      "Isola degli uomini-pesce",
      "Isola delle Api",
      "Isola di Kuraigana",
    ],
  },
];
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
const search = document.location.search.split("&"); //Crea Array di stringhe formato dall'ultima porzione di (http://127.0.0.1:5500/quesiti.html?category=0&level=easy) ["?category=0" , "level=easy"]

if (search[0].slice(10) == 0) {
  //Seleziono categoria e difficoltà usando slice sull'Array "serch"
  var categoria = "Science: Computers";
} else {
  var categoria = "Anime: One Piece";
}
const livello = search[1].slice(6);
const selectedQuestions = questions.filter((question) => {
  //selectedQuestions è l'Array di domande che useremo nella funzione successiva
  return question.category == categoria && question.difficulty == livello;
});

console.log(selectedQuestions);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
var numeroDomanda = 0;
var results = 0;

const nextQuestion = function () {
  // Funzione che genera le domande nella pagina
  if (numeroDomanda < selectedQuestions.length) {
    const div2 = document.getElementById("div2");
    div2.style.display = "flex"; //Restituisco display = 'flex'; al div secondario
    if (numeroDomanda > 0) {
      RispostaDaModificare = document.querySelector(".rispostaGiusta"); //Elimino la classe ".rispostaGiusta" dal paragrafo a cui l'ho aggiunta alla prima domanda
      RispostaDaModificare.classList.remove("rispostaGiusta");
    }

    document.getElementById("domanda").innerHTML =
      selectedQuestions[numeroDomanda].question; //Punsho la domanda "question" all'interno dell'H1
    if (selectedQuestions[numeroDomanda].incorrect_answers.length == 3) {
      //Controllo quante risposte ho in una domanda
      var Numeri = [];
      NumeroRisposta = Math.floor(Math.random() * 4 + 1); //Genero un numero casuale
      Numeri.push(NumeroRisposta);
      const rispostaGiusta = document.getElementById(
        "risposta" + NumeroRisposta
      ); //Seleziono un paragafo casuale attraverso "getElementById("risposta" + NumeroRisposta)" dove "NumeroRisposta" è un numero casuale
      rispostaGiusta.innerText =
        selectedQuestions[numeroDomanda].correct_answer; //Aggingo il testo all'h1 dall'array
      rispostaGiusta.classList.add("rispostaGiusta");

      for (let i = 0; i < 3; i++) {
        //creo un ciclo per inserire le risposte sbagliate nel DOM
        NumeroRisposta = Math.floor(Math.random() * 4 + 1); //Genero un numero casuale
        while (Numeri.includes(NumeroRisposta)) {
          //Genero un numero casuale fin quando non trovo un numero non incluso nell'Array di controllo
          NumeroRisposta = Math.floor(Math.random() * 4 + 1);
        }
        Numeri.push(NumeroRisposta);
        const rispostaSbagliata = document.getElementById(
          "risposta" + NumeroRisposta
        ); //aggiungo la risposta ad un p scelto attraverso il numero casuale
        rispostaSbagliata.innerText =
          selectedQuestions[numeroDomanda].incorrect_answers[i];
      }
    } else {
      const div2 = document.getElementById("div2"); // Il caso in cui abbiamo solo due risposte
      div2.style.display = "none";
      var Numeri = []; //Creo il mio Array di controllo
      NumeroRisposta = Math.floor(Math.random() * 2 + 1); //genero un numero casuale e lo aggiungo all'array
      Numeri.push(NumeroRisposta);
      const rispostaGiusta = document.getElementById(
        "risposta" + NumeroRisposta
      ); //seleziono il p casuale e aggiungo il testo della risposta giusta e gli aggiungo la classe "rispostaGiusta
      rispostaGiusta.innerText =
        selectedQuestions[numeroDomanda].correct_answer;
      rispostaGiusta.classList.add("rispostaGiusta");
      if (Numeri.includes(1)) {
        //se la mia risposta giusta ha numero 1 allora quella scorretta avrà num 2 e viceversa
        NumeroRisposta = 2;
      } else {
        NumeroRisposta = 1;
      }
      const rispostaSbagliata = document.getElementById(
        "risposta" + NumeroRisposta
      );
      rispostaSbagliata.innerText =
        selectedQuestions[numeroDomanda].incorrect_answers[0]; // Aggiungo la risposta sbagliata al dom
    }
    const H3 = document.getElementsByTagName("h3")[0]; //Cambio il valore dell'H£ a fondo pagina in modo che aumenti con il numero delle domande
    H3.innerHTML = "QUESTION " + (numeroDomanda + 1) + "<span>/10</span>";
    numeroDomanda++;
  } else {
    document.getElementById("Results").value = results; // Invio il valore si Results attraverso il form per averlo nella pagina successiva
    document.getElementById("hiddenResults").submit();
  }
};
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
const controlloRisposta = function (e) {
  if (e.target.classList.contains("rispostaGiusta")) {  //Usiamo l'oggetto "e" per controllare che il target della risposta sia corretta
    results++;
    e.target.classList.add("right");                    //Aggiungiamo la classe "right" all'interno del p che ha la classe "rispostaGiusta"
    setTimeout(function () {                            //Dopo due secondi la elimino
      e.target.classList.remove("right");
    }, 2000);
  } 
  
  else {                                                //Se la risposta non è quella corretta aggiungo alla risposta sbagliata la classe "wrong" e la classe "right" alla risposta giusta
    e.target.classList.add("wrong");
    document.querySelector(".rispostaGiusta").classList.add("right");  
    setTimeout(function () {
      e.target.classList.remove("wrong");              //Dopo due secondi le elimino
    }, 2000);
    setTimeout(function () {
      document.querySelector(".rispostaGiusta").classList.remove("right");
    }, 2000);
  }
  console.log(results);
};
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
const evento = function () {
  const risposte = document.querySelectorAll("div p");                  //seleziono tutti i p dal DOM
  for (i = 0; i < risposte.length; i++) {                               //Ad ognuno aggiungo un "EventListener" che al click lancia le funzioni create
    risposte[i].addEventListener("click", function (e) {
      controlloRisposta(e);
      setTimeout(nextQuestion, 2000);
      clearTimeout(Timeout);                                           //elimina il TimeOut
      setTimeout(resetTimer, 2000);                                    //Dopo due secondi resettiamo il timer
    });
  }
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
function update() {                                                    //Funzione di update del timer che è autoinvocante
  field.each(function (d) {                                            //La funzione update itera su ogni elemento presente nella selezione field in modo da ripetersi ogni secondo
    (d.previous = d.value), (d.value = d.update(timePassed));          //d.previous memorizza il valore precedente di "d.value" e "d.value" viene aggiornato chiamando la funzione update con il parametro timePassed.
  });

  path.transition().ease("elastic").duration(500).attrTween("d", arcTween); //Avviene una transizione "elastica" (ease("elastic")) con una transizione di 0.5 secondi che utilizza la funzione arcTween per transizionare l'attributo d del percorso

  label.text(function (d) {                                                 //Il testo nell'elemento label(Il counter) viene aggiornato con la differenza tra d.size e d.value
    return d.size - d.value;
  });

  if (timePassed <= timeLimit)
    Timeout = setTimeout(update, 1000 - (timePassed % 1000));        //Se il tempo trascorso (timePassed) è inferiore al limite di tempo (timeLimit)[cioè se il tempo non è scaduto]: Viene impostato un timeout con la funzione update che verrà richiamata ogni secondo (1000 - (timePassed % 1000) regola l'invocazione della funzione ogni secondo).
  else {                                                             //Viene chiamata la funzione nextQuestion.Viene chiamata la funzione resetTimer per azzerare il timer.
    nextQuestion();
    resetTimer();
  }
  console.log(fields[0]);
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
nextQuestion();                                                         //Lancio la funzione di creazione delle domande per creare la prima domanda 
update();
evento();



/*var seconds = 60;
  var display = document.getElementById('timer');
  var intervalId = setInterval(function () {
    seconds--;
    display.textContent = seconds;
    if (seconds <= 0) {
      clearInterval(intervalId);
      display.textContent = 'Tempo scaduto!';
    }
  }, 1000);*/