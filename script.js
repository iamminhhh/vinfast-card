const card = document.getElementById("card");
const backImage = document.getElementById("backImage");
const enBtn = document.getElementById("enBtn");
const viBtn = document.getElementById("viBtn");

let isFlipped = true;
let rotateX = 0;
let rotateY = 0;
updateCard();

/* ===========================
   FLIP CARD
=========================== */

card.addEventListener("click", () => {

    isFlipped = !isFlipped;
    updateCard();

});

/* ===========================
   UPDATE CARD
=========================== */

function updateCard(){

    if(isFlipped){

        card.style.transform =
            `rotateY(180deg)`;

    }else{

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    }

}

/* ===========================
   HOVER EFFECT
=========================== */

document.addEventListener("mousemove",(e)=>{

    if(isFlipped) return;

    rotateY = (window.innerWidth/2-e.clientX)/35;
    rotateX = (e.clientY-window.innerHeight/2)/35;

    updateCard();

});

document.addEventListener("mouseleave",()=>{

    if(isFlipped) return;

    rotateX = 0;
    rotateY = 0;

    updateCard();

});

/* ===========================
   LANGUAGE
=========================== */

function changeLanguage(img){

    backImage.style.opacity = 0;

    setTimeout(()=>{

        backImage.src = img;

    },180);

}

backImage.onload=()=>{

    backImage.style.opacity=1;

};

enBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    changeLanguage("back-en.png");

    enBtn.classList.add("active");
    viBtn.classList.remove("active");

});

viBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    changeLanguage("back-vi.png");

    viBtn.classList.add("active");
    enBtn.classList.remove("active");

});
