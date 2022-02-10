// Create variables targetting the relevant DOM elements here 👇

var title = document.querySelector('h2');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var image = document.querySelector('.cover-image');

var currentCover = {
  title.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  image.src = covers[getRandomIndex(covers)];
}

// title.innerText = titles[getRandomIndex(titles)];
// tagline1.innerText = descriptors[getRandomIndex(descriptors)];
// tagline2.innerText = descriptors[getRandomIndex(descriptors)];
// image.src = covers[getRandomIndex(covers)];

// var currentCover = document.querySelector('.main-cover');

var button = document.querySelector('.random-cover-button');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇

button.addEventListener('click', getNewCover);

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// function getNewCover() {
//   title.innerText = 'yeehaw';
// }

function getNewCover(image, title, tagline1, tagline2) {
  currentCover = new Cover(image, title, tagline1, tagline2);
}
