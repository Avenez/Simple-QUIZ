const newRate = function (e) {
    console.log("Heyyy");
    const stars_1 = document.getElementById("feedbackStars").children;
    const stars = Array.from(stars_1);
    a = stars.findIndex((star) => {return star === e.target})
    for (let i = 0; i<=a; i++) {
        const feedbackStars = document.getElementById("feedbackStars");
        const Newstar = document.createElement("img");
        Newstar.src = "Assets/images/star.svg"
        Newstar.setAttribute("alt", "stellina");
        feedbackStars.replaceChild(Newstar, stars[i]);
    }
    for (let i = a+1; i<stars.length; i++) {
        const feedbackStars = document.getElementById("feedbackStars");
        const Newstar = document.createElement("img");
        Newstar.src = "Assets/images/blackStar.svg"
        Newstar.setAttribute("alt", "stellina");
        feedbackStars.replaceChild(Newstar, stars[i]);
    }
    makeStarsResponsive();
}

const makeStarsResponsive = function () {
    const stars_1 = document.getElementById("feedbackStars").children;
    const stars = Array.from(stars_1);
    for (let i = 0; i<stars.length; i++) {
        stars[i].addEventListener("click", newRate);
    }
}

makeStarsResponsive();

