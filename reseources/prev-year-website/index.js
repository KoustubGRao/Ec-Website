let team = document.getElementById("team");
let gallery = document.getElementById("gallery");
let home = document.getElementById("home");
let knowaboutus = document.getElementById("knowaboutus");
let projects = document.getElementById("projects");

let nav1 = document.getElementById("nav1");
let nav2 = document.getElementById("nav2");
let nav3 = document.getElementById("nav3");
let nav4 = document.getElementById("nav4");
let nav5 = document.getElementById("nav5");
let nav6 = document.getElementById("nav6");

nav6.addEventListener("click", function () {
    home.style.display = "none";
    gallery.style.display = "none";
    team.style.display = "block";
    knowaboutus.style.display = "none";
    projects.style.display = "none";
    events.style.display = "none";
});

nav5.addEventListener("click", function () {
    home.style.display = "none";
    gallery.style.display = "block";
    team.style.display = "none";
    knowaboutus.style.display = "none";
    projects.style.display = "none";
    events.style.display = "none";
});

nav1.addEventListener("click", function () {
    home.style.display = "block";
    gallery.style.display = "none";
    team.style.display = "none";
    knowaboutus.style.display = "none";
    projects.style.display = "none";
    events.style.display = "none";
});

nav2.addEventListener("click", function () {
    home.style.display = "none";
    gallery.style.display = "none";
    team.style.display = "none";
    knowaboutus.style.display = "block";
    projects.style.display = "none";
    events.style.display = "none";
});

nav4.addEventListener("click", function () {
    home.style.display = "none";
    gallery.style.display = "none";
    team.style.display = "none";
    knowaboutus.style.display = "none";
    projects.style.display = "block";
    events.style.display = "none";
});

nav3.addEventListener("click", function () {
    home.style.display = "none";
    gallery.style.display = "none";
    team.style.display = "none";
    knowaboutus.style.display = "none";
    projects.style.display = "none";
    events.style.display = "block";
});