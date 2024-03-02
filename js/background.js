// const images = ["img/0.jpeg", "img/1.jpeg", "img/2.jpeg"];

// function paintBackground() {
//   document.body.background = images[Math.floor(Math.random() * images.length)];
// }

// paintBackground();
// setInterval(paintBackground, 10000);

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
let lastAppendedElement;

function paintBackground() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.createElement("img");
  bgImage.src = `img/${chosenImage}`;

  if (lastAppendedElement) {
    document.body.removeChild(lastAppendedElement);
  }
  document.body.appendChild(bgImage);
  lastAppendedElement = bgImage;
}

paintBackground();
setInterval(paintBackground, 5000);