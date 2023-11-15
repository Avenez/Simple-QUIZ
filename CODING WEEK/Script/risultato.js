let result = document.location.search.slice(9,);

const innerText = function(){
    let percentuale = document.getElementById("a4");
    let innerTextContainer = document.getElementById("a3");
    let resultsContainer1 = document.getElementById("a1");
    let resultsContainer2 = document.getElementById("a2");
    let wrong = 10-result;

    percentuale.setAttribute("stroke-dasharray", `${result*10}, 100`);

    resultsContainer1.innerHTML = 
    `<h3>Correct <br> <span class="percentage">${result}0%</span></h3>
    <p class="num">${result}/10 questions</p>`

    resultsContainer2.innerHTML = 
    `<h3>Wrong <br> <span class="percentage">${wrong}0%</span></h3>
    <p class="num">${wrong}/10 questions</p>`

    if(result >= 6){
        console.log("ciao ciao");
        innerTextContainer.innerHTML = 
        `<b>Congratulations!</b>
        <b class="blue">You passed the exam.</b>
        <p>We will send you the certificate in few minutes. Check your email (including promotions / spam
            folder).</p>`;
    }
    else{
        innerTextContainer.innerHTML = 
        `<b>We are really sorry!</b>
        <b class="blue">You haven't passed the exam</b>
        <p>We are truly sorry. We believe your true calling is gardening. <br> 本当に申し訳ございません。私たちはあなたの天職はガーデニングだと信じています。 </p>`;
    }
}



window.onload = (e) => {
    innerText();
};
