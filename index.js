const mySlide = document.querySelectorAll('.slide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 3000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 3000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<mySlide.length;i++){
		mySlide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > mySlide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = mySlide.length;
	   }
	mySlide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
	

var newsest = $('.news-title > .newsest');
var hightlight = $('.news-title > .hightlight');
newsest.click(function(){
	hightlight.removeClass('active');
	newsest.addClass('active');
	$('.news-main-content').removeClass('non-news');
})
hightlight.click(function(){
	hightlight.addClass('active');
	newsest.removeClass('active');
	$('.news-main-content').addClass('non-news');
})