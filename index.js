$(document).ready(function () {
  let btnSlideToggle1 = $("#clickbtn1");
  let btnSlideToggle2 = $("#clickbtn2");
  let btnSlideToggle3 = $("#clickbtn3");
  let btnSlideToggle4 = $("#clickbtn4"); 

  btnSlideToggle1.click(function () {
    $("#ndmotkhoi1").slideToggle();
    $("#ndmotkhoi1").toggleClass("tenClass");
  });

  btnSlideToggle2.click(function () {
    $("#ndmotkhoi2").slideToggle();
    $("#ndmotkhoi2").toggleClass("tenClass");
  });

  btnSlideToggle3.click(function () {
    $("#ndmotkhoi3").slideToggle();
    $("#ndmotkhoi3").toggleClass("tenClass");
  });

  btnSlideToggle4.click(function () {
    $("#ndmotkhoi4").slideToggle();
    $("#ndmotkhoi4").toggleClass("tenClass");
  });
});