const card = document.getElementById("card");

card.addEventListener("click", () => {

    card.classList.toggle("flip");

});

document.addEventListener("mousemove", (e) => {

    if (card.classList.contains("flip")) return;

    const x = (window.innerWidth / 2 - e.clientX) / 35;

    const y = (e.clientY - window.innerHeight / 2) / 35;

    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave", () => {

    if (card.classList.contains("flip")) return;

    card.style.transform = "rotateX(0) rotateY(0)";

});

card.addEventListener("click", () => {

    if (card.classList.contains("flip")) {

        card.style.transform = "rotateY(180deg)";

    } else {

        card.style.transform = "rotateX(0) rotateY(0)";

    }

});