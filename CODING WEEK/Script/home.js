let button = document.getElementsByTagName('button');
let checkBox = document.getElementsByTagName('input');

button.disabled = true; //Impedisce che il bottone venga usato prima delle selezioni

const illumina = function(){
    if (checkBox[4].checked == true && (checkBox[0].checked == true || checkBox[1].checked == true) && (checkBox[2].checked == true || checkBox[3].checked == true)) { //controllo delle checkbox
        button[0].classList.add('buttonCheked'); //Illuminazione tasto
        button.disabled = false;                    //attiva il pulsante
    }
    else{
    button[0].classList.remove('buttonCheked');  //spengo il bottone nel caso non sia tutto checked
    button.disabled = true;
    }
}

const spegni = function(){
    button[0].classList.remove('buttonCheked');  //Viene usata all'Onload per spegnere il bottone e riavviare la checkbox
    checkBox[4].checked = false;
}

window.onload = (e) =>{ 
    spegni();
};


document.getElementsByTagName("button").addEventListner("click", function (e) { //passa alla pagina successiva trasferendo le selezioni
    document.getElementsByTagName("form").submit();
})
