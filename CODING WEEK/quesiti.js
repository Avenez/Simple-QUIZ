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
  ];


var numeroDomanda = 0;
var results = 0;

const nextQuestion = function () {
    if (numeroDomanda < questions.length) {
        const div2 = document.getElementById("div2");
        div2.style.display = 'flex';
        if (numeroDomanda>0) {
            RispostaDaModificare = document.querySelector(".rispostaGiusta");
            RispostaDaModificare.classList.remove("rispostaGiusta")
        }
        document.getElementById("domanda").innerHTML = questions[numeroDomanda].question;   
        if (questions[numeroDomanda].incorrect_answers.length == 3) {
            var Numeri = []
            NumeroRisposta = Math.floor(Math.random() * 4 + 1);
            Numeri.push(NumeroRisposta);
            const rispostaGiusta = document.getElementById("risposta" + NumeroRisposta);
            rispostaGiusta.innerText = questions[numeroDomanda].correct_answer;
            rispostaGiusta.classList.add("rispostaGiusta");
            for (let i = 0; i<3; i++) {
                NumeroRisposta = Math.floor(Math.random() * 4 + 1);
                while (Numeri.includes(NumeroRisposta)) {
                    NumeroRisposta = Math.floor(Math.random() * 4 + 1);
                }
                Numeri.push(NumeroRisposta);
                const rispostaSbagliata = document.getElementById("risposta" + NumeroRisposta);
                rispostaSbagliata.innerText = questions[numeroDomanda].incorrect_answers[i];
            }
        } else {
            const div2 = document.getElementById("div2");
            div2.style.display = 'none';
            var Numeri = []
            NumeroRisposta = Math.floor(Math.random() * 2 + 1);
            Numeri.push(NumeroRisposta);
            const rispostaGiusta = document.getElementById("risposta" + NumeroRisposta);
            rispostaGiusta.innerText = questions[numeroDomanda].correct_answer;
            rispostaGiusta.classList.add("rispostaGiusta");
            if (Numeri.includes(1)) {
                NumeroRisposta = 2;
            } else {
                NumeroRisposta = 1;
            }
            const rispostaSbagliata = document.getElementById("risposta" + NumeroRisposta);
            rispostaSbagliata.innerText = questions[numeroDomanda].incorrect_answers[0];
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