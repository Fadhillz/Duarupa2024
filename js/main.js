let slideIndex = 0;
let autoPlayInterval;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearInterval(autoPlayInterval); // Stop the auto-play temporarily
  showSlides(slideIndex += n);
  autoPlayInterval = setInterval(() => plusSlides(1), 2000); // Restart auto-play
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(autoPlayInterval); // Stop the auto-play temporarily
  showSlides(slideIndex = n - 1);
  autoPlayInterval = setInterval(() => plusSlides(1), 2000); // Restart auto-play
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slidesimg");
  let dots = document.getElementsByClassName("dot");
  
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

// Auto play functionality
autoPlayInterval = setInterval(() => plusSlides(1), 3500); // Change image every 2 seconds


// button detail
document.querySelector('#detel').onclick = () => {
  document.querySelector('#about').scrollIntoView({behavior:'smooth'})
}

// Nav
const heroElement = document.querySelector('.hero');

const heroObserver = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;

    if(!entry.isIntersecting) {
      document.querySelector('.navbar').classList.add('scroll')
    } else {
      document.querySelector('.navbar').classList.remove('scroll')
    }
  }, {threshold: 0.7})

heroObserver.observe(heroElement);

// mari eksperiment
let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls for Slider 2
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls for Slider 2
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slidess = document.getElementsByClassName("caraouselfoto");
  let bbbs = document.getElementsByClassName("bbb");
  if (n > slidess.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slidess.length}
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";
  }
  for (i = 0; i < bbbs.length; i++) {
    bbbs[i].className = bbbs[i].className.replace(" active", "");
  }
  slidess[slideIndex2-1].style.display = "block";
  bbbs[slideIndex2-1].className += " active";
}
