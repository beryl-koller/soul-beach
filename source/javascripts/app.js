//= require jquery
//= require bootstrap-sprockets
//= require_tree .

let circle = document.getElementById("circle");

const onMouseMove = (e) => {
  circle.style.left = (e.pageX) + "px";
  circle.style.top = (e.pageY) + "px";
};
document.addEventListener("mousemove", onMouseMove);



const constellations = document.querySelectorAll(".constellation")

const dancingCursor = () => {
    document.getElementById("dancing").style.display = "block";
    document.getElementById("still").style.display = "none";
};

const stillCursor = () => {
  document.getElementById("dancing").style.display = "none";
  document.getElementById("still").style.display = "block";
};

constellations.forEach((constellation) => {
    constellation.addEventListener("mouseenter", dancingCursor)
    constellation.addEventListener("mouseleave", stillCursor)
})