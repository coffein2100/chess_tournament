var slides = document.querySelectorAll('#stage__slides .stage__slide');
var currentSlide = 0;
var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
	nextSlide();
};
previous.onclick = function(){
	previousSlide();
};

function goToSlide(n){
	slides[currentSlide].className = 'stage__slide';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'stage__slide showing';
}
function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}