const card = document.getElementById("card");

const backImage = document.getElementById("backImage");

const enBtn = document.getElementById("enBtn");
const viBtn = document.getElementById("viBtn");

/* ===========================
   FLIP CARD
=========================== */

card.addEventListener("click", () => {
    card.classList.toggle("flip");
});

/* ===========================
   PREVENT BUTTON FLIP
=========================== */

enBtn.addEventListener("click", (e) => {
    e.stopPropagation();
});

viBtn.addEventListener("click", (e) => {
    e.stopPropagation();
});

/* ===========================
   CHANGE LANGUAGE
=========================== */

function changeLanguage(image) {

    backImage.style.opacity = 0;

    setTimeout(() => {

        backImage.src = image;

    }, 150);

}

backImage.onload = () => {
    backImage.style.opacity = 1;
};

enBtn.addEventListener("click", () => {

    changeLanguage("back-en.png");

    enBtn.classList.add("active");
    viBtn.classList.remove("active");

});

viBtn.addEventListener("click", () => {

    changeLanguage("back-vi.png");

    viBtn.classList.add("active");
    enBtn.classList.remove("active");

});

/* ===========================
   HOVER EFFECT
=========================== */

document.addEventListener("mousemove", (e) => {

    if (card.classList.contains("flip")) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (e.clientY - window.innerHeight / 2) / 40;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave", () => {

    if (card.classList.contains("flip")) return;

    card.style.transform = "rotateY(0deg) rotateX(0deg)";

});

/* Khi lật thì bỏ hiệu ứng hover */

card.addEventListener("transitionend", () => {

    if (card.classList.contains("flip")) {
        card.style.transform = "rotateY(180deg)";
    } else {
        card.style.transform = "";
    }

});