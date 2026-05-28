// MENU ANIMATION

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

  link.addEventListener("mouseenter", () => {

    link.style.transform = "scale(1.1)";

  });

  link.addEventListener("mouseleave", () => {

    link.style.transform = "scale(1)";

  });

});


// SCROLL HEADER EFFECT

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){

    header.style.background = "rgba(0,0,0,0.8)";

  } else {

    header.style.background = "rgba(0,0,0,0.4)";

  }

});


// HERO TEXT ANIMATION

const heroTitle = document.querySelector(".hero h2");

setTimeout(() => {

  heroTitle.style.opacity = "1";

  heroTitle.style.transform = "translateY(0px)";

}, 300);


// BUTTON CLICK EFFECT

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform = "scale(0.95)";

    setTimeout(() => {

      button.style.transform = "scale(1)";

    }, 150);

  });

});


// CARD HOVER EFFECT

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mousemove", () => {

    card.style.boxShadow = "0 0 25px #22c55e";

  });

  card.addEventListener("mouseleave", () => {

    card.style.boxShadow = "0 0 20px rgba(0,0,0,0.4)";

  });

});


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
    .scrollIntoView({

      behavior:"smooth"

    });

  });

});