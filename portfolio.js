/** INITIALIZATION **/
$('html').css('display', 'none');
$(document).ready(main);
function main() {
	$('html:not(.overlay-text)').fadeIn(800);
	$('.overlay-text').css('display', 'none');
	// $('.portfolio-slideshow').scrollLeft(400);
}
function toggleNav() {
	$('.navbar').slideToggle();
}

/** PORTFOLIO CAROUSEL **/
var front = 0;	// front frame, index in const frames array
var curr = 0;	// front frame, index in dynamic frames in html
const frames = $(".frame td").toArray();
const captions = $(".overlay td").toArray();
const imgs = $(".frame img");
var interval = setInterval(slide, 4000);


// for (var i = 0; i < imgs.length; i++) {

// 	// $(imgs[i]).hover(function() {
// 	// 	console.log('hovered')
// 	// 	clearInterval(interval);
// 	// }, function() {
// 	// 	interval = setInterval(3000);
// 	// 	console.log('off')
// 	// })
// 	console.log(imgs[i])
// 	$(imgs[i]).click(function() {
// 		shrink();
// 	})
// }

function slide() {
	slideCarousel(400, 1);
	// $(".portfolio-slideshow").scrollLeft(pos + 150);
}

function slideCarousel(amount, direction) {
	clearInterval(interval);
	var html = "<td>" + frames[front].innerHTML + "</td>";
	var html2 = "<td></td>";
	var pos = $(".portfolio-slideshow").scrollLeft();
	// console.log(pos);
	if (direction == 1) {
		$(".portfolio-slideshow").animate({ scrollLeft: '+=' + amount.toString() }, 1000);
	} else {
		$(".portfolio-slideshow").animate({ scrollLeft: '-=' + amount.toString() }, 1000);
		console.log('reverse')
	}
	
	// $('table tr').find('td:eq(' + curr + '),th:eq(' + curr + ')').remove();
	// $('table tr').find('td:eq(' + curr + '),th:eq(' + curr + ')').innerHTML = "";
	// console.log($(".frame tr"));
	$('.frame tr')[0].innerHTML += html;
	$('.frame tr')[1].innerHTML += html2;
	$('.overlay tr')[0].innerHTML += "<td>" + captions[front].innerHTML + "</td>";
	var newImg = $(".frame img");
	newImg = newImg[newImg.length - 1];
	console.log(newImg);
	$(newImg).click(function() {
		shrink();
	})
	front = (front + 1) % Math.round(frames.length / 2);
	// console.log(front);
	// console.log($(".frame td"));
	interval = setInterval(slide, 4000);
}

// function shrink() {
// 	alert("shrink");
// 	// $(".frame").css(height, "40vh");
// 	$(".frame").animate({
// 		height: "40vh"
// 	}, 1000)
// 	$(".frame").animate({
// 		width: "20vh"
// 	}, 1000);
// 	$(".portfolio-slideshow").animate({
// 		height: "40vh"
// 	}, 1000)
// }

// $(".portfolio-slideshow").scroll(function() {console.log("scrolled")})

/** NAVIGATION ANIMATION **/
const navButton = document.querySelector('#navbar-button');
navButton.addEventListener('click', openNav)

function openNav() {
	$('.navbar').slideToggle();
}