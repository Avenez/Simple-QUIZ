let button = document.getElementsByTagName('button');
let checkBox = document.getElementsByTagName('input');

button.disabled = true;
const illumina = function(){
    if (checkBox[4].checked == true && (checkBox[0].checked == true || checkBox[1].checked == true) && (checkBox[2].checked == true || checkBox[3].checked == true)) {
        button[0].classList.toggle('buttonCheked');
        button.disabled = false;
    }
}

const spegni = function(){
    button[0].classList.remove('buttonCheked');
    checkBox[4].checked = false;
}

window.onload = (e) =>{
    spegni();
};


document.getElementsByTagName("button").addEventListner("click", function (e) {
    document.getElementsByTagName("form").submit();
})
