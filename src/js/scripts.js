/**
 * SITE SCRIPTS
 * 
 * The site scripts contains all JavaScript functionality for the site, 
 * including UI interactions, component behaviour, and event handling. Scripts 
 * are written with performance and minimalism in mind, avoiding unnescessary 
 * bloat while enhancing usability and accessibility.
 * 
 * Where possible, functions should be modular and scoped to individual 
 * components or sections. Consider extracting logic into reusable utilities if 
 * complexity grows.
 */

// Test scipts.js is loaded
console.log('Hello from scripts.js');

/**
 * FADE IN EFFECT
 * 
 * Uses IntersectionObserver to apply the `fade-in-active` class to elements 
 * with the `.fade-in` class when they come into view, triggering a fade-in 
 * effect.
 * 
 * The observer watches each `.fade-in` element and adds the `fade-in-active` 
 * class which it becomes 10% visible in the viewport. After the class is 
 * added, the element is no longer observed.
 */

const fadeInElements = document.querySelectorAll('.fade-in');
const fadeInObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in__active');
                fadeInObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

fadeInElements.forEach((element) => fadeInObserver.observe(element));

/**
 * SLIDER
 */

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const track = slider.querySelector('.slider-track');
  const slides = slider.querySelectorAll('.slider-slide');
  const prevButton = slider.querySelector('.slider-prev');
  const nextButton = slider.querySelector('.slider-next');
  
  let currentIndex = 0;
  let slidesToShow = 3;
  let totalSlides = slides.length;

  // Function to calculate number of slides to show based on viewport
  function updateSlidesToShow() {
    const width = window.innerWidth;

    if (width >= 1024) {
      slidesToShow = 3;  // 3 slides for large screens
    } else if (width >= 768) {
      slidesToShow = 2;  // 2 slides for medium screens
    } else {
      slidesToShow = 1;  // 1 slide for small screens
    }
  }

  // Function to update the position of the track
  function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Go to the previous slide
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - slidesToShow; // Wrap around to the last set
    }
    updateSlider();
  }

  // Go to the next slide
  function nextSlide() {
    if (currentIndex < totalSlides - slidesToShow) {
      currentIndex++;
    } else {
      currentIndex = 0; // Wrap around to the first set
    }
    updateSlider();
  }

  // Attach event listeners to the buttons
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Listen for window resize to update the number of slides shown
  window.addEventListener('resize', function () {
    updateSlidesToShow();
    updateSlider();
  });

  // Initialize slider
  updateSlidesToShow();
  updateSlider();
});
