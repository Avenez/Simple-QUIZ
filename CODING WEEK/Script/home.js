let button = document.getElementsByTagName('button');
let checkBox = document.getElementsByTagName('input');

button.disabled = true;
const illumina = function(){
    button[0].classList.toggle('buttonCheked');
    button.disabled = false;
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
