console.log('Hello, world!');

// Initialise Work Slider
var slider = tns({
  container: '.work__slider',
  items: 2,
  startIndex: 2,
  autoplay: true,
  autoplayButtonOutput: false,
  center: true,
  controls: true,
  controlsPosition: 'bottom',
  controlsText: [
    '<img src="../assets/images/icon-arrow-left.svg" alt />',
    '<img src="../assets/images/icon-arrow-right.svg" alt />',
  ],
});
