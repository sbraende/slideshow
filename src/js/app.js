// SLIDESHOW ARRAY
const slideshowArray = [
  {
    name: "Half Life 2",
    src: "./assets/images/half-life2.jpg",
    description:
      "Half-Life 2 is a legendary sci-fi first-person shooter where players, as Gordon Freeman, fight the alien Combine in a dystopian world. Known for its physics-based puzzles, gripping story, and innovative gameplay, it redefined gaming and remains a classic.",
  },
  {
    name: "Ghost of Tsushima",
    src: "./assets/images/Ghost_of_tsunami.webp",
    description:
      "Ghost of Tsushima is an open-world action-adventure set in 13th-century Japan during a Mongol invasion. Players control Jin Sakai, a samurai who must embrace unconventional tactics to protect Tsushima. Known for its stunning visuals, combat, and gripping story.",
  },
  {
    name: "Baldur's Gate 3",
    src: "./assets/images/baldurs-gate3.jpeg",
    description:
      "Baldur's Gate 3 is a Dungeons & Dragons-inspired RPG set in the Forgotten Realms. Players make choices in combat, dialogue, and exploration, shaping a story of battling mind flayers and forging alliances. It offers deep characters, co-op play, and vast freedom.",
  },
  {
    name: "Minecraft",
    src: "./assets/images/minecraft.jpg",
    description:
      "Minecraft is a sandbox game where players explore, build, and survive in a blocky world. Players can mine resources, craft items, battle enemies, and create structures, offering endless creative possibilities and multiplayer fun.",
  },
  {
    name: "God of War",
    src: "./assets/images/godofwar.webp",
    description:
      "God of War is an action-adventure game following Kratos, a Spartan warrior turned god, as he embarks on a journey of revenge, redemption, and fatherhood. Mixing brutal combat, puzzles, and Norse mythology, it’s a story-driven epic.",
  },
  {
    name: "Need for Speed - Road Challange",
    src: "./assets/images/need-for-speed-road-challange.webp",
    description:
      "Need for Speed: Road Challenge (also known as Need for Speed: Porsche Unleashed) is a racing game focused on Porsche cars. Players race through various tracks, unlock new cars, and experience a mix of time trials and competitive races.",
  },
  {
    name: "Red Dead Redemption 2",
    src: "./assets/images/rd2.jpg",
    description:
      "Red Dead Redemption 2 is an open-world action-adventure game set in the late 1800s. Players control Arthur Morgan, an outlaw in the Van der Linde gang, navigating a vast, detailed world filled with story-driven missions, exploration, and immersive gameplay",
  },
  {
    name: "Sly Cooper 3",
    src: "./assets/images/sly-cooper.avif",
    description:
      "Sly Cooper 3: Honor Among Thieves is an action-adventure game where players control Sly Cooper, a raccoon thief, alongside his gang. They embark on a mission to recover a stolen treasure while using stealth, platforming, and unique character abilities.",
  },
  {
    name: "Stardew Valley",
    src: "./assets/images/stardew_valley.avif",
    description:
      "Stardew Valley is a relaxing farming simulation game where players restore a run-down farm, grow crops, raise animals, and build relationships. It features exploration, crafting, and community-focused storytelling.",
  },
  {
    name: "The Legend of Zelda: Ocarina of Time",
    src: "./assets/images/zelda_ocarina_1.webp",
    description:
      "Zelda: Ocarina of Time is an action-adventure game where Link must save Hyrule from Ganondorf. Players explore, solve puzzles, and use the magical ocarina to manipulate time in a richly immersive world.",
  },
];

// SELECT ELEMENTS
const slideshowImage = document.querySelector(".slideshow__image");
const bulletContainer = document.querySelector(".slideshow__bullets-container");
const slideshowTitle = document.querySelector(".slideshow__caption");
const slideshowDescription = document.querySelector(".slideshow__description");
const buttonPrevious = document.querySelector(".slideshow__previous");
const imageCount = document.querySelector(".slideshow__imagecount");
const buttonNext = document.querySelector(".slideshow__next");

// GLOBAL VARIABLES
let count = 0;

// LOAD SLIDESHOW
document.addEventListener("DOMContentLoaded", () => renderSlideshow(count));

// RENDER BULLETPOINTS
const renderBulletPoints = () => {
  // Remove already rendered bullets.
  bulletContainer.textContent = "";

  // Create bullet per item in slideshowArray.
  slideshowArray.forEach((e, index) => {
    const bulletButton = document.createElement("button");
    bulletButton.classList.add("slideshow__bulletpoint");
    bulletContainer.append(bulletButton);

    // Highlight current bullet with current slide.
    if (index === count) {
      bulletButton.classList.add("slideshow__bulletpoint--active");
    }
  });
};

// RENDER SLIDESHOW
const renderSlideshow = (elementNumber) => {
  // Add content to current page.
  slideshowImage.src = slideshowArray[elementNumber].src;
  slideshowTitle.textContent = slideshowArray[elementNumber].name;
  slideshowDescription.textContent = slideshowArray[elementNumber].description;
  imageCount.textContent = `${count + 1} out of ${slideshowArray.length}`;

  // Render pulletPoints to page
  renderBulletPoints();

  // Toggle visibility Previous and Next button based on start or end of slideshow.
  // Hide previuos button if this is the first slide
  if (count === 0) {
    buttonPrevious.style.visibility = "hidden";
  } else {
    buttonPrevious.style.visibility = "visible";
  }
  // Hide next button if it is the last slide.
  if (count === slideshowArray.length - 1) {
    buttonNext.style.visibility = "hidden";
  } else {
    buttonNext.style.visibility = "visible";
  }
};

// PREVIOUS AND NEXT EVENT LISTENERS
// Previous slide button event
buttonPrevious.addEventListener("click", () => {
  count--;
  renderSlideshow(count);
});

// Next slide button event
buttonNext.addEventListener("click", () => {
  count++;
  renderSlideshow(count);
});
