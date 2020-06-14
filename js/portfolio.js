/** INITIALIZATION **/
// $('html').css('display', 'none');
$(document).ready(main);
function main() {
  // $('html:not(.overlay-text)').fadeIn(800);
  // $('.overlay-text').css('display', 'none');
  $(".portfolio-slideshow").scrollLeft(400);
}
function toggleNav() {
  $(".navbar").slideToggle();
}

/** PORTFOLIO CAROUSEL **/
var front = 0; // front frame, index in const frames array
var curr = 0; // front frame, index in dynamic frames in html
const frames = $(".frame td").toArray();
const captions = $(".overlay td").toArray();
const imgs = $(".frame img");
var interval = setInterval(slide, 4000);

function slide() {
  slideCarousel(400, 1);
}

function pauseCarousel() {
  clearInterval(interval);
}

function slideCarousel(amount, direction) {
  var html = "<td>" + frames[front].innerHTML + "</td>";
  var html2 = "<td></td>";
  var pos = $(".portfolio-slideshow").scrollLeft();
  // console.log(pos);
  if (direction == 1) {
    $(".portfolio-slideshow").animate(
      { scrollLeft: "+=" + amount.toString() },
      1000
    );
  } else {
    $(".portfolio-slideshow").animate(
      { scrollLeft: "-=" + amount.toString() },
      1000
    );
  }

  $(".frame tr")[0].innerHTML += html;
  $(".frame tr")[1].innerHTML += html2;
  $(".overlay tr")[0].innerHTML += "<td>" + captions[front].innerHTML + "</td>";
  var newImg = $(".frame img");
  newImg = newImg[newImg.length - 1];
  $(newImg).click(function () {
    shrink();
  });
  front = (front + 1) % Math.round(frames.length / 2);
}

// event listeners for carousel
$(".right").click(function () {
  pauseCarousel();
  slideCarousel(400, 1);
});

$(".left").click(function () {
  pauseCarousel();
  slideCarousel(400, -1);
});

$(".right").hover(pauseCarousel, function () {
  interval = setInterval(slide, 4000);
});

$(".left").hover(pauseCarousel, function () {
  interval = setInterval(slide, 4000);
});

/** NAVIGATION ANIMATION **/
const navButton = document.querySelector("#navbar-button");
navButton.addEventListener("click", openNav);

function openNav() {
  $(".navbar").slideToggle();
}
