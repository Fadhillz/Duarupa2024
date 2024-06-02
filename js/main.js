// Menubutton
// toggle class active (menu)
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu diclick
document.querySelector('#clipmenu').onclick = () => {
	navbarNav.classList.toggle('active');
};

// Klik diluar sidebar untuk hilangkan nav Active
const clipmenu = document.querySelector('#clipmenu');
// ketika yang bukan navbar dan menu diklik 
document.addEventListener('click', function(e) {
	if (!clipmenu.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
})


// Slider pongsi
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
// Autoplay Funcion
autoPlayInterval = setInterval(() => plusSlides(1), 3500); // Change image every 3,5 seconds
autoPlayInterval = setInterval(() => plusSlides2(1), 10000); // Change image every 2 seconds


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


// tombol pesan admin1
document.querySelector('#admin1').onclick = () => {
  window.open('https://wa.link/t7y5hb', '_blank');
}

// tombol pesan admin2
document.querySelector('#admin2').onclick = () => {
  window.open('https://wa.link/wc9yf6', '_blank');
}

// instagram
document.querySelector('#instagram').onclick = () => {
  window.open('https://www.instagram.com/duarupa_official/', '_blank');
}

// popup
window.onload = function() {
  var popup = document.getElementById('popup');
  popup.style.display = 'flex';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
  bgMusic.play();
}

// player music
const bgMusic = document.getElementById('bg-music');

function isMusicPlaying() {
  return !bgMusic.paused;
}

function togglePlayPause() {
  if (isMusicPlaying()) {
    bgMusic.pause();
  } else {
    bgMusic.play();
  }
}

function changeFeather() {
    var featherIcon = document.getElementById('feather-icon');
    var currentFeather = featherIcon.getAttribute('data-feather');
    
    if (currentFeather === 'menu') {
        featherIcon.setAttribute('data-feather', 'instagram');
    } else {
        featherIcon.setAttribute('data-feather', 'menu');
    }
}
