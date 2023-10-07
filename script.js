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
