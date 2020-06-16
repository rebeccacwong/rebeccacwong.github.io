/** NAVIGATION ANIMATION **/
function toggleNav() {
  $(".mynavbar").slideToggle();
}

const navButton = document.querySelector("#navbar-button");
navButton.addEventListener("click", openNav);

function openNav() {
  $(".mynavbar").slideToggle();
}
