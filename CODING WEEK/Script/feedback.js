var a = -1;
const newRate = function (c) {
    const stars_1 = document.getElementById("feedbackStars").children;
    const stars = Array.from(stars_1);
    for (let i = 0; i<=c; i++) {
        stars[i].src = "Assets/images/star.svg";
        stars[i].alt = "stellina";
    }
    for (let i = c+1; i<stars.length; i++) {
        stars[i].src = "Assets/images/blackStar.svg";
        stars[i].alt = "stellinaNera";
    }
}

const newMomentaryRate = function (e) {
    const stars_1 = document.getElementById("feedbackStars").children;
    const stars = Array.from(stars_1);
    b = stars.findIndex((star) => {return star === e.target})
    for (let i = 0; i<=b; i++) {
        stars[i].src = "Assets/images/star.svg";
        stars[i].alt = "stellina";
    }
    for (let i = b+1; i<stars.length; i++) {
        stars[i].src = "Assets/images/blackStar.svg";
        stars[i].alt = "stellinaNera";
    }
}

const makeStarsResponsive = function () {
    const stars_1 = document.getElementById("feedbackStars").children;
    const stars = Array.from(stars_1);
    for (let i = 0; i<stars.length; i++) {
        stars[i].addEventListener("click", function (e) {
            console.log("Heyyy");
            const stars_1 = document.getElementById("feedbackStars").children;
            const stars = Array.from(stars_1);
            a = stars.findIndex((star) => {return star === e.target})
            newRate(a);
            console.log(a);
        });
        stars[i].addEventListener("mouseover", newMomentaryRate);
        stars[i].addEventListener("mouseout", function () {
            console.log("ABB");
            newRate(a);
        });
    }
}

makeStarsResponsive();
