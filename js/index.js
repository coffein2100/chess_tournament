//mobile этапы
var slides = document.querySelectorAll('#stage__slides .stage__slide');
var currentSlide = 0;
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var indicator = document.querySelectorAll('.stage__slidenow');

next.onclick = function(){
	nextSlide();
};
previous.onclick = function(){
	previousSlide();
};

function goToSlide(n){
	slides[currentSlide].className = 'stage__slide';
	indicator[currentSlide].className = 'stage__slidenow';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'stage__slide showing';
	indicator[currentSlide].className = 'stage__slidenow slideactive';
	if (currentSlide >= 1){
		previous.removeAttribute("disabled");
		previous.className = 'controls';
	}
	if (currentSlide == 0){
		previous.disabled= "true";
		previous.className = 'controls__disabled';
	}
	if (currentSlide == slides.length-1){
		next.disabled= "true";
		next.className = 'controls__disabled';
	}
	if (currentSlide != slides.length-1){
		next.removeAttribute("disabled");
		next.className = 'controls';
	}
}
function nextSlide(){
	goToSlide(currentSlide+1);
}
function previousSlide(){
	goToSlide(currentSlide-1);
}
//мобайл участники
var slidesParticipants = document.querySelectorAll('#participants__slides .participants__slide');
var currentSlideParticipants = 0;
var slideIntervalParticipants = setInterval(nextSlideParticipants,4000);
var playingParticipants = true;
var nextParticipants = document.getElementById('participants_next');
var previousParticipants = document.getElementById('participants_previous');
var numberParticipants = document.querySelector('.participants__numbers')

function nextSlideParticipants(){
	goToSlideParticipants(currentSlideParticipants+1);
	numberParticipants.innerHTML=currentSlideParticipants+1+ " " + "/ " + slidesParticipants.length;
}

function previousSlideParticipants(){
	goToSlideParticipants(currentSlideParticipants-1);
	numberParticipants.innerHTML=currentSlideParticipants + 1 + " " + "/ " + slidesParticipants.length;
}
function goToSlideParticipants(n){
	slidesParticipants[currentSlideParticipants].className = 'participants__slide';
	currentSlideParticipants = (n+slidesParticipants.length)%slidesParticipants.length;
	slidesParticipants[currentSlideParticipants].className = 'participants__slide show';
}
nextParticipants.onclick = function(){
	nextSlideParticipants();
};
previousParticipants.onclick = function(){
	previousSlideParticipants();
};