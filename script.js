
var slideIndex = 1;
		showSlides(slideIndex);

function nextSlide() {
  		showSlides(slideIndex += 1);
	}

function prevSlide() {
  		showSlides(slideIndex -= 1);  
	}

function currentSlide(n) {
  		showSlides(slideIndex = n);
	}

function showSlides(n) {
  		var i;
  		var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
  
  		if (n > slides.length) {slideIndex = 1}    
  		if (n < 1) {slideIndex = slides.length}
  
  		for (i = 0; i < slides.length; i++) {
      		slides[i].classList.remove("active");
  		}
  
  		slides[slideIndex-1].classList.add("active");
}

	function autoSlide() {
  		nextSlide();
  		setTimeout(autoSlide, 5000);
}

autoSlide();