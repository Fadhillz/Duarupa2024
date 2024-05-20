let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slidesimg");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

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