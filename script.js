const card = document.querySelector(".card");

card.addEventListener("mousemove",(e)=>{
    card.style.transform =
    "perspective(1000px) rotateY(10deg)";
});

card.addEventListener("mouseleave",()=>{
    card.style.transform =
    "perspective(1000px) rotateY(-10deg)";
});
