// Timer 60 secondi

var width = 200,
    height = 200,
    timePassed = 0,
    timeLimit = 60;

var fields = [{
    value: timeLimit,
    size: timeLimit,
    update: function () {
        return timePassed = timePassed + 1;
    }
}];

var nilArc = d3.svg.arc()
    .innerRadius(width / 3 - 10)
    .outerRadius(width / 3 - 10)
    .startAngle(2 * Math.PI)
    .endAngle(0);

var arc = d3.svg.arc()
    .innerRadius(width / 3 - 20)
    .outerRadius(width / 3 - 10)
    .startAngle(2*Math.PI)
    .endAngle(function (d) {
        return ((d.value / d.size) * 2 * Math.PI);
    });

var svg = d3.select(".container").append("svg")
    .attr("width", width)
    .attr("height", height);

var field = svg.selectAll(".field")
    .data(fields)
    .enter().append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .attr("class", "field");

var back = field.append("path")
    .attr("class", "path path--background")
    .attr("d", arc);

var path = field.append("path")
    .attr("class", "path path--foreground");

var label = field.append("text")
    .attr("class", "label")
    .attr("dy", ".35em");

console.log(fields)

function pulseText() {
    back.classed("pulse", true);
    label.classed("pulse", true);

    if ((timeLimit - timePassed) >= 0) {
        label.style("font-size", "100px")
            .attr("transform", "translate(0," + +4 + ")")
            .text(function (d) {
                return d.size - d.value;
            });
    }

    label.transition()
        .ease("elastic")
        .duration(900)
        .style("font-size", "60px")
        .attr("transform", "translate(0," + -10 + ")");
}

function arcTween(b) {
    var i = d3.interpolate({
        value: b.previous
    }, b);
    return function (t) {
        return arc(i(t));
    };
}


const resetTimer = function(a) {
    timePassed = 0;
    update();
}



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
      incorrect_answers: [
          "Ice Cream Sandwich",
          "Jelly Bean",
          "Marshmallow",
      ],
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
      correct_answer: "The ability of a class to inherit attributes and methods from another class",
      incorrect_answers: [
          "The modification of an object's attributes during runtime",
          "The use of private variables within a class",
          "The ability of a class to hide implementation details"
      ]
  },
  {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What is a 'kernel' in an operating system?",
      correct_answer: "The part of the operating system that manages hardware resources",
      incorrect_answers: [
          "A programming language used for OS development",
          "A library of common functions used by programs",
          "A type of file system"
      ]
  },
  {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which protocol is commonly used to send emails over the Internet?",
      correct_answer: "SMTP",
      incorrect_answers: [
          "FTP",
          "HTTP",
          "DHCP"
      ]
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
          "Visual Private Network"
      ]
  },
  {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which language is commonly used for Android app development?",
      correct_answer: "Java",
      incorrect_answers: [
          "Swift",
          "C#",
          "Python"
      ]
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
          "Real-time Automated Memory"
      ]
  },
  {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which programming language is mainly used for client-side web development?",
      correct_answer: "JavaScript",
      incorrect_answers: [
          "Python",
          "PHP",
          "Ruby"
      ]
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
          "A network protocol"
      ]
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
          "Improving the performance of an existing model without additional data"
      ]
  },
  {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What is the purpose of the 'else' statement in programming?",
      correct_answer: "To specify a block of code to be executed when the condition in the 'if' statement is false",
      incorrect_answers: [
          "To terminate the program",
          "To create a loop",
          "To define a function"
      ]
  },
  {
      category: "Anime: One Piece",
      type: "single",
      difficulty: "easy",
      question: "Qual è il nome del protagonista principale di One Piece?",
      correct_answer: "Luffy",
      incorrect_answers: ["Zoro",
          "Sanji",
          "Nami"
      ],


  },
  {
      category: "Anime: One Piece",
      type: "single",
      difficulty: "easy",
      question: "Quale frutto del diavolo mangia Luffy?",
      correct_answer: "Gomu Gomu no mi",
      incorrect_answers: ["Mera Mera no mi",
          "Ope Ope no mi",
          "Gura Gura no mi"],

  },
  {
      category: "Anime: One Piece",
      type: "single",
      difficulty: "easy",
      question: "Qual è il sogno di Luffy?",
      correct_answer: "Diventare il re dei pirati",
      incorrect_answers: ["Essere il più forte del mondo",
          "Diventare un rivoluzionario",
          "Essere un marine"],

  },
  {
      category: "Anime: One Piece",
      type: "single",
      difficulty: "easy",
      question: "Chi è lo spadaccino della ciurma di Luffy?",
      correct_answer: "Roronoa Zoro",
      incorrect_answers: ["Sanji",
          "Trafalgar Law",
          "Marco"],
  },
  {
      category: "Anime: One Piece",
      type: "single",
      difficulty: "easy",
      question: "Qual è il nome della nave attuale di Luffy?",
      correct_answer: "Thousand Sunny",
      incorrect_answers: ["Going Merry",
          "Red Force",
          "Queen Mama Chanter"],

  },
  {
      category: "Anime: One Piece",
      type: "single",
      difficulty: "easy",
      question: "Chi è il cuoco della ciurma di Cappello di Paglia?",
      correct_answer: "Sanji",
      incorrect_answers: ["Nami",
          "Usopp",
          "Franky"],

  },
  {
      category: "Anime: One Piece",
      type: "single",
      difficulty: "easy",
      question: "Qual è la frase tipica di Luffy?",
      correct_answer: "Andiamo!",
      incorrect_answers: ["Ora ci divertiremo!", "Mi dispiace", "Non ho fame", "Andiamo!"],
  },
  {
      category: "Anime: One Piece",
      type: "single",
      difficulty: "easy",
      question: "Qual è il Frutto del diavolo di Nico Robin?",
      correct_answer: "Hana Hana no mi",
      incorrect_answers: ["Bara Bara no Mi", "Kilo Kilo no Mi", "Bane Bane no Mi"],

  },
  {
      category: "Anime: One Piece",
      type: "single",
      difficulty: "easy",
      question: "Qual è il nome del principale antagonista della serie?",
      correct_answer: "Marshall D. Teach",
      incorrect_answers: ["Akainu",
          "Kaido",
          "Barbabianca",],

  },
  {
      category: "Anime: One Piece",
      type: "single",
      difficulty: "easy",
      question: "Chi è il vice-capitano della ciurma di Cappello di Paglia?",
      correct_answer: "Roronoa Zoro",
      incorrect_answers: ["Sanji",
          "Nico Robin",
          "Usopp"],
  },

  {
      category: "Anime: One Piece",
      type: "multiple",
      difficulty: "medium",
      question: "Qual è lo stato nativo di Nami?",
      correct_answer: "Villaggio di Arlong",
      incorrect_answers: ["Villaggio di Loguetown",
          "Villaggio di Cocoyasi",
          "Villaggio di Shimotsuki"]
  },
  {
      category: "Anime: One Piece",
      type: "multiple",
      difficulty: "medium",
      question: "Qual è il nome del padre di Portgas D. Ace?",
      correct_answer: "Gol D. Roger",
      incorrect_answers: ["Monkey D. Dragon",
          "Edward Newgate",
          "Silvers Rayleigh"]
  },
  {
      category: "Anime: One Piece",
      type: "multiple",
      difficulty: "medium",
      question: "Chi ha sconfitto Bartholomew Kuma durante la Guerra di Marineford?",
      correct_answer: "Marshall D. Teach",
      incorrect_answers: ["Donquixote Doflamingo",
          "Boa Hancock",
          "Borsalino"]
  },
  {
      category: "Anime: One Piece",
      type: "multiple",
      difficulty: "medium",
      question: "Qual è la sigla che identifica la flotta di Capone Bege?",
      correct_answer: "Fire Tank Pirates",
      incorrect_answers: ["Sun Pirates",
          "Heart Pirates",
          "Barto Club"]
  },
  {
      category: "Anime: One Piece",
      type: "multiple",
      difficulty: "medium",
      question: "Qual è il vero nome del personaggio noto come Corazon?",
      correct_answer: "Donquixote Rosinante",
      incorrect_answers: ["Trafalgar Law",
          "Vergo",
          "Dellinger"]
  },
  {
      category: "Anime: One Piece",
      type: "multiple",
      difficulty: "medium",
      question: "In quale luogo è stato nascosto la Thousand Sunny durante il timeskip?",
      correct_answer: "Archipelago Sabaody",
      incorrect_answers: ["Isola degli uomini-pesce",
          "Punk Hazard",
          "Whole Cake Island"]
  },
  {
      category: "Anime: One Piece",
      type: "multiple",
      difficulty: "medium",
      question: "Qual è la posizione di Sanji nella Germa 66?",
      correct_answer: "Terzo figlio",
      incorrect_answers: ["Secondo figlio",
          "Primo figlio",
          "Quarto figlio"]
  },
  {
      category: "Anime: One Piece",
      type: "multiple",
      difficulty: "medium",
      question: "Qual è il nome della spada di Tashigi?",
      correct_answer: "Shigure",
      incorrect_answers: ["Wado Ichimonji",
          "Sandai Kitetsu",
          "Yubashiri"]
  },
  {
      category: "Anime: One Piece",
      type: "multiple",
      difficulty: "medium",
      question: "Quale è l'abilità di Basil Hawkins nella serie?",
      correct_answer: "Wara Wara no Mi",
      incorrect_answers: ["Gomu Gomu no Mi",
          "Soru Soru no Mi",
          "Nikyu Nikyu no Mi"]
  },
  {
      category: "Anime: One Piece",
      type: "multiple",
      difficulty: "medium",
      question: "Qual è il nome dell'isola in cui Luffy si é allenato dopo la guerra di Marineford?",
      correct_answer: "Isola delle Donne",
      incorrect_answers: ["Isola degli uomini-pesce",
          "Isola delle Api",
          "Isola di Kuraigana"]
  }
]

const search = document.location.search.split("&");

if (search[0].slice(10) == 0) {
    var categoria = "Science: Computers";
} else {
    var categoria = "Anime: One Piece";
}
const livello = search[1].slice(6);
const selectedQuestions = questions.filter((question) => {
  return question.category == categoria && question.difficulty == livello;
})

console.log(selectedQuestions);

var numeroDomanda = 0;
var results = 0;

const nextQuestion = function () {
    if (numeroDomanda < selectedQuestions.length) {
        const div2 = document.getElementById("div2");
        div2.style.display = 'flex';
        if (numeroDomanda>0) {
            RispostaDaModificare = document.querySelector(".rispostaGiusta");
            RispostaDaModificare.classList.remove("rispostaGiusta")
        }
        document.getElementById("domanda").innerHTML = selectedQuestions[numeroDomanda].question;   
        if (selectedQuestions[numeroDomanda].incorrect_answers.length == 3) {
            var Numeri = []
            NumeroRisposta = Math.floor(Math.random() * 4 + 1);
            Numeri.push(NumeroRisposta);
            const rispostaGiusta = document.getElementById("risposta" + NumeroRisposta);
            rispostaGiusta.innerText = selectedQuestions[numeroDomanda].correct_answer;
            rispostaGiusta.classList.add("rispostaGiusta");
            for (let i = 0; i<3; i++) {
                NumeroRisposta = Math.floor(Math.random() * 4 + 1);
                while (Numeri.includes(NumeroRisposta)) {
                    NumeroRisposta = Math.floor(Math.random() * 4 + 1);
                }
                Numeri.push(NumeroRisposta);
                const rispostaSbagliata = document.getElementById("risposta" + NumeroRisposta);
                rispostaSbagliata.innerText = selectedQuestions[numeroDomanda].incorrect_answers[i];
            }
        } else {
            const div2 = document.getElementById("div2");
            div2.style.display = 'none';
            var Numeri = []
            NumeroRisposta = Math.floor(Math.random() * 2 + 1);
            Numeri.push(NumeroRisposta);
            const rispostaGiusta = document.getElementById("risposta" + NumeroRisposta);
            rispostaGiusta.innerText = selectedQuestions[numeroDomanda].correct_answer;
            rispostaGiusta.classList.add("rispostaGiusta");
            if (Numeri.includes(1)) {
                NumeroRisposta = 2;
            } else {
                NumeroRisposta = 1;
            }
            const rispostaSbagliata = document.getElementById("risposta" + NumeroRisposta);
            rispostaSbagliata.innerText = selectedQuestions[numeroDomanda].incorrect_answers[0];
        }
        const H3 = document.getElementsByTagName("h3")[0];
        H3.innerHTML = "QUESTION " + (numeroDomanda + 1) + "<span>/10</span>";
        numeroDomanda++;
    } else {
        document.getElementById("Results").value = results;
        document.getElementById("hiddenResults").submit();
    }
} 

const controlloRisposta = function (e) {
    if (e.target.classList.contains("rispostaGiusta")) {
      results++;
      e.target.classList.add("right");
      setTimeout(function (){
        e.target.classList.remove("right");
      }, 2000)
    } else {
      e.target.classList.add("wrong");
      document.querySelector(".rispostaGiusta").classList.add("right")
      setTimeout(function (){
        e.target.classList.remove("wrong");
      }, 2000)
      setTimeout(function (){
        document.querySelector(".rispostaGiusta").classList.remove("right");
      }, 2000)
    }
    console.log(results);
  }
  
  const evento = function () {
    const risposte = document.querySelectorAll("div p");
    for (i = 0; i < risposte.length; i++) {
        risposte[i].addEventListener("click", function (e) {
        controlloRisposta(e);
        setTimeout(nextQuestion, 2000);
        clearTimeout(Timeout);
        setTimeout(resetTimer,2000);
      })
    }
  }

nextQuestion();

function update() {

    field
        .each(function (d) {
            d.previous = d.value, d.value = d.update(timePassed);
        });

    path.transition()
        .ease("elastic")
        .duration(500)
        .attrTween("d", arcTween);

    //if ((timeLimit - timePassed) <= 10)
    //    pulseText();
    label
      .text(function (d) {
        return d.size - d.value;
      });

    if (timePassed <= timeLimit)
        Timeout = setTimeout(update, 1000 - (timePassed % 1000));
    else {
        nextQuestion();
        resetTimer();
    }
    console.log(fields[0]);
};

update();
evento();