const section = document.querySelector("section");
const PlayerLivesCount = document.querySelector("span");
const PlayerLives = 6;

// link text
PlayerLivesCount.textContent = PlayerLives;

// generate the data
const getData = () => [
  { imgSrc: "./Assets/1.png", name: "one" },
  { imgSrc: "./Assets/2.png", name: "two" },
  { imgSrc: "./Assets/3.png", name: "three" },
  { imgSrc: "./Assets/4.png", name: "four" },
  { imgSrc: "./Assets/5.png", name: "five" },
  { imgSrc: "./Assets/6.png", name: "six" },
  { imgSrc: "./Assets/7.png", name: "seven" },
  { imgSrc: "./Assets/8.png", name: "eight" },
  { imgSrc: "./Assets/1.png", name: "one" },
  { imgSrc: "./Assets/2.png", name: "two" },
  { imgSrc: "./Assets/3.png", name: "three" },
  { imgSrc: "./Assets/4.png", name: "four" },
  { imgSrc: "./Assets/5.png", name: "five" },
  { imgSrc: "./Assets/6.png", name: "six" },
  { imgSrc: "./Assets/7.png", name: "seven" },
  { imgSrc: "./Assets/8.png", name: "eight" },
];

// randomize
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

// card generator
const cardGenerator = () => {
  const cardData = randomize();

  // generate HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
  });
};

cardGenerator();
