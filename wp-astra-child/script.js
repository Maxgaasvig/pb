console.log("Astra Child Theme JS is running!");

// Activate DOM //
document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM is ready!");
    console.log("hello!");
    initScrollToTop();
    initTypedJs();
});

// ---------- smooth scroll ---------- //
// Add function to html + add ID and onclick event + scroll function // 
function initScrollToTop() {
    document.querySelector("body").innerHTML += /*html*/`
        <a id="scrollTop" onclick="scrollToTheTop()" title="Go to top">^</a>
    `;
    window.onscroll = function () {
        scrollFunction();
    };
}
// scroll function active and deactive when scrolling //
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}
// scroll function to the top //
function scrollToTheTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ---------- typed.js ---------- //
// animated text with string, how fast it goes and loop //
function initTypedJs() {
    new Typed(".typed", {
        strings: ["A Coder.","Frontend.", "Analytical.", "A Web Developer.", "A Gamer."],
        typeSpeed: 85,
        loop: true,
    });
};
