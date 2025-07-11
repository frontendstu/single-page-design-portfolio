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
