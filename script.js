/* ===============================
   Typing Effect
================================ */

const words = [
  "Software Engineering Student",
  "Web Developer",
  "Java Programmer",
  "Robotics Enthusiast",
  "AI Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    let current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
        
        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/* ===============================
   Sticky Navbar
================================ */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "#081b29";
        header.style.boxShadow = "0 0 20px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(0,0,0,.25)";
        header.style.boxShadow = "none";

    }

});


/* ===============================
   Active Navigation
================================ */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ===============================
   Scroll Reveal Animation
================================ */

const revealItems = document.querySelectorAll(
".about-box,.edu-card,.skill-card,.project-card,.contact-card"
);

function reveal() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);

reveal();


/* ===============================
   Back To Top Button
================================ */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ===============================
   Loader
================================ */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});


/* ===============================
   Hero Image Effect
================================ */

const image = document.querySelector(".hero-image img");

if (image) {

image.addEventListener("mousemove", () => {

image.style.transform = "scale(1.05) rotate(2deg)";

});

image.addEventListener("mouseleave", () => {

image.style.transform = "scale(1)";

});

}


/* ===============================
   Console Message
================================ */

console.log("Portfolio Loaded Successfully");