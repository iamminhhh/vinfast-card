const card = document.getElementById("card");

const backImage = document.getElementById("backImage");

const enBtn = document.getElementById("enBtn");
const viBtn = document.getElementById("viBtn");

/* FLIP CARD */

card.addEventListener("click", () => {
    card.classList.toggle("flip");
});

/* PREVENT BUTTON CLICK FLIPPING */

enBtn.addEventListener("click", (e) => {
    e.stopPropagation();
});

viBtn.addEventListener("click", (e) => {
    e.stopPropagation();
});

/* CHANGE LANGUAGE */

function changeLanguage(imageFile){

    backImage.style.opacity = 0;

    setTimeout(() => {

        backImage.src = imageFile;

        backImage.onload = () => {
            backImage.style.opacity = 1;
        };

    }, 180);
}

/* ENGLISH */

enBtn.addEventListener("click", () => {

    changeLanguage("back-en.png");

    enBtn.classList.add("active");
    viBtn.classList.remove("active");

});

/* VIETNAMESE */

viBtn.addEventListener("click", () => {

    changeLanguage("back-vi.png");

    viBtn.classList.add("active");
    enBtn.classList.remove("active");

});

/* OPTIONAL 3D HOVER EFFECT */

document.addEventListener("mousemove", (e) => {

    if(card.classList.contains("flip")) return;

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (e.clientY - window.innerHeight / 2) / 40;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave", () => {

    if(card.classList.contains("flip")) return;

    card.style.transform =
        "rotateX(0deg) rotateY(0deg)";
});

card.addEventListener("click", () => {

    if(card.classList.contains("flip")){

        card.style.transform =
        "rotateY(180deg)";

    }else{

        card.style.transform =
        "rotateX(0deg) rotateY(0deg)";
    }

});        card.style.transform = "rotateX(0) rotateY(0)";

    }

});
