const slideshowArray = [
  {
    name: "Half Life 2",
    src: "./assets/images/half-life2.jpg",
    description: "Half Life 2 is a great game. Love it!",
  },
  {
    name: "Ghost of Tsushima",
    src: "./assets/images/Ghost_of_tsunami.webp",
    description: "Ghost of thushima is a great game. Love it!",
  },
  {
    name: "Ghost of Tsushima",
    src: "./assets/images/Ghost_of_tsunami.webp",
    description: "Ghost of thushima is a great game. Love it!",
  },
  {
    name: "Ghost of Tsushima",
    src: "./assets/images/Ghost_of_tsunami.webp",
    description: "Ghost of thushima is a great game. Love it!",
  },
  {
    name: "Ghost of Tsushima",
    src: "./assets/images/Ghost_of_tsunami.webp",
    description: "Ghost of thushima is a great game. Love it!",
  },
  {
    name: "Ghost of Tsushima",
    src: "./assets/images/Ghost_of_tsunami.webp",
    description: "Ghost of thushima is a great game. Love it!",
  },
  {
    name: "Ghost of Tsushima",
    src: "./assets/images/Ghost_of_tsunami.webp",
    description: "Ghost of thushima is a great game. Love it!",
  },
  {
    name: "Ghost of Tsushima",
    src: "./assets/images/Ghost_of_tsunami.webp",
    description: "Ghost of thushima is a great game. Love it!",
  },
  {
    name: "Ghost of Tsushima",
    src: "./assets/images/Ghost_of_tsunami.webp",
    description: "Ghost of thushima is a great game. Love it!",
  },
  {
    name: "Ghost of Tsushima",
    src: "./assets/images/Ghost_of_tsunami.webp",
    description: "Ghost of thushima is a great game. Love it!",
  },
];

// Get elements
const bulletContainer = document.querySelector(".slideshow__bullets-container");
const buttonNext = document.querySelector(".slideshow__next");
const buttonPrevious = document.querySelector(".slideshow__previous");

// Global variables
let count = 0;

// Main function
renderSlideshow(count);

function renderSlideshow(elementNumber) {
  const slideshowImage = document.querySelector(".slideshow__image");
  slideshowImage.src = slideshowArray[elementNumber].src;

  const slideshowTitle = document.querySelector(".slideshow__caption");
  slideshowTitle.textContent = slideshowArray[elementNumber].name;

  const slideshowDescription = document.querySelector(
    ".slideshow__description"
  );
  slideshowDescription.textContent = slideshowArray[elementNumber].description;

  const imageCount = document.querySelector(".slideshow__imagecount");
  imageCount.textContent = `${count + 1} out of ${slideshowArray.length}`;

  bulletPoints();

  if (count === 0) {
    buttonPrevious.style.visibility = "hidden";
  } else {
    buttonPrevious.style.visibility = "visible";
  }

  if (count === slideshowArray.length - 1) {
    buttonNext.style.visibility = "hidden";
  } else {
    buttonNext.style.visibility = "visible";
  }
}

buttonNext.addEventListener("click", () => {
  count++;
  renderSlideshow(count);
});

buttonPrevious.addEventListener("click", () => {
  count--;
  renderSlideshow(count);
});

function bulletPoints() {
  const bullets = bulletContainer.children;
  if (bullets) {
    const childeren = document.querySelectorAll(".slideshow__bulletpoint");
    childeren.forEach((bulletpointButton) => {
      bulletpointButton.remove();
    });
  }

  for (let index = 0; index < slideshowArray.length; index++) {
    const bulletButton = document.createElement("button");
    bulletButton.classList.add("slideshow__bulletpoint");
    bulletContainer.append(bulletButton);

    if (index === count) {
      bulletButton.classList.add("slideshow__bulletpoint--active");
    }
  }
}
