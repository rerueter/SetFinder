//=== Deck Construction ===//

const cards = [];
const card = {
  count: null,
  shade: null,
  color: null,
  shape: null,
};

const addCard = () => {
  const newCard = {
    count: card.count,
    shade: card.shade,
    color: card.color,
    shape: card.shape,
  };
  cards.push(newCard);
  console.table(cards);
  appendCard();
};

const appendCard = () => {
  const cardTemplate = document.createElement("div");
  cardTemplate.classList.add("card");
  cardTemplate.innerHTML = `     
    <div>${card.count}</div>
    <div>${card.shade}</div>
    <div>${card.color}</div>
    <div>${card.shape}</div>
  `;
  document.getElementById("cards").append(cardTemplate);
};

const rmvCard = () => {
  cards.pop();
  console.table(cards);

  let hand = document.getElementById("cards");
  let toRemove = hand.lastChild;
  hand.removeChild(toRemove);
};

// === Set Checkers === //

// compares 3 inputs to see if they are either all identical or all unique
// returns true if all are identical or all are unique, returns false otherwise
const subsetChecker = (a, b, c) => {
  let subset = false;
  if (a == b && b == c) {
    subset = true;
  } else if (a != b && b != c && a != c) {
    subset = true;
  }
  console.log(`subset: ${subset}`);
  return subset;
};

// compares 3 cards, using subsetChecker to compare each of 4 attributes
// if all 4 subset checks return true, the cards comprise a Set and true is returned
const setChecker = (a, b, c) => {
  let set = false;
  let chk = subsetChecker;
  let color = chk(a.color, b.color, c.color);
  let shape = chk(a.shape, b.shape, c.shape);
  let count = chk(a.count, b.count, c.count);
  let fill = chk(a.fill, b.fill, c.fill);
  if (color && shape && count && fill) {
    set = true;
  }
  console.log(`set: ${set}`);
  return set;
};

// compares every combination of three cards from an array, looking for a Set
// as soon as a Set is found, true is returned
const setFinder = () => {
  let setExists = false;
  let input = cards;
  // console.log(input.length);
  for (i = 0; i < input.length - 2; i++) {
    for (j = 1; j < input.length - 1; j++) {
      for (k = 2; k < input.length; k++) {
        console.log(input[i], input[j], input[k]);
        if (setChecker(input[i], input[j], input[k]) === true) {
          setExists = true;
          console.log(`setExists: ${setExists}`);
          return setExists;
        }
      }
    }
  }
  console.log(`setExists: ${setExists}`);
  return setExists;
};

const attribAssn = (e) => {
  e.preventDefault();
  const val = e.target.value;
  if (e.target.classList.contains("color")) {
    card.color = val;
  }
  if (e.target.classList.contains("count")) {
    card.count = val;
  }
  if (e.target.classList.contains("shape")) {
    card.shape = val;
  }
  if (e.target.classList.contains("shade")) {
    card.shade = val;
  }
  const pending = document.getElementById("pending");
  console.log(pending);
  pending.innerHTML = `
    <div>${card.count}</div>
    <div>${card.shade}</div>
    <div>${card.color}</div>
    <div>${card.shape}</div>
  `;
  console.log(card);
};

// === Listeners === //
document.getElementById("body").addEventListener("click", attribAssn);
document.getElementById("addCard").addEventListener("click", addCard);
document.getElementById("rmvCard").addEventListener("click", rmvCard);
document.getElementById("setExists").addEventListener("click", setFinder);

// const cards = [
//   { color: "red", shape: "squiggle", count: 3, fill: "solid" },
//   { color: "red", shape: "squiggle", count: 3, fill: "hatch" },
//   { color: "red", shape: "squiggle", count: 3, fill: "empty" },
//   { color: "blue", shape: "pill", count: 3, fill: "solid" },
//   { color: "blue", shape: "pill", count: 3, fill: "hatch" },
//   { color: "blue", shape: "pill", count: 3, fill: "empty" },
//   { color: "green", shape: "diamond", count: 3, fill: "solid" },
//   { color: "green", shape: "diamond", count: 3, fill: "hatch" },
//   { color: "green", shape: "diamond", count: 3, fill: "empty" },
// ];
