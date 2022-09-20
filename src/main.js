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

// randomize cards
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

    // Attach the info to the cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);

    // Attach the card to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

// check cards
const checkCards = (e) => {
  console.log(e);
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  console.log(flippedCards);

  // function
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
    }
  }
};

cardGenerator();
