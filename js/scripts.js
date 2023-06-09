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
    '<svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="#FFF" d="M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.121-5.12z"/></svg>',
    '<svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="#FFF" d="m6.808 16 8-8-8-8-1.687 1.687 5.121 5.12H.001v2.386h10.241l-5.121 5.12z"/></svg>',
  ],
});
