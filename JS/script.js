////////////////// Dropdown
$("#drop").hide();
$("#more_btn_l").click(function (event) {
  event.stopPropagation();
  $("#drop").slideToggle("slow");
});
///////////////// Dropdown
$("#drop").hide();
$("#more_btn_s").click(function (event) {
  event.stopPropagation();
  $("#drop").slideToggle("slow");
});
//////////////////// Slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Flip Card 1
document.getElementById("card").addEventListener("mouseenter", function () {
  this.style.transform = "rotateY(180deg)";
});

document.getElementById("card").addEventListener("mouseleave", function () {
  this.style.transform = "rotateY(0deg)";
});
// Flip Card 2
document.getElementById("card2").addEventListener("mouseenter", function () {
  this.style.transform = "rotateY(180deg)";
});
document.getElementById("card2").addEventListener("mouseleave", function () {
  this.style.transform = "rotateY(0deg)";
});
// Flip Card 3
document.getElementById("card3").addEventListener("mouseenter", function () {
  this.style.transform = "rotateY(180deg)";
});

document.getElementById("card3").addEventListener("mouseleave", function () {
  this.style.transform = "rotateY(0deg)";
});
// Flip Card 4
document.getElementById("card4").addEventListener("mouseenter", function () {
  this.style.transform = "rotateY(180deg)";
});

document.getElementById("card4").addEventListener("mouseleave", function () {
  this.style.transform = "rotateY(0deg)";
});
// Flip Card 5
document.getElementById("card5").addEventListener("mouseenter", function () {
  this.style.transform = "rotateY(180deg)";
});

document.getElementById("card5").addEventListener("mouseleave", function () {
  this.style.transform = "rotateY(0deg)";
});
// Flip Card 6
document.getElementById("card6").addEventListener("mouseenter", function () {
  this.style.transform = "rotateY(180deg)";
});

document.getElementById("card6").addEventListener("mouseleave", function () {
  this.style.transform = "rotateY(0deg)";
});
// Flip Card 8
document.getElementById("card8").addEventListener("mouseenter", function () {
  this.style.transform = "rotateY(180deg)";
});

document.getElementById("card8").addEventListener("mouseleave", function () {
  this.style.transform = "rotateY(0deg)";
});

$(function () {
  $("#datepicker1").datepicker();
});
$(function () {
  $("#datepicker2").datepicker();
});
