// === Deck Construction === //

let cards = [];
let card = {
  count: "?",
  shade: "?",
  color: "?",
  shape: "?",
};

// get card attributes from interface and construct preview card
const attribAssn = (e) => {
  const val = e.target.value;
  const preview = document.getElementById("preview");

  if (e.target.classList.contains("color")) {
    card.color = val;
  }
  if (e.target.classList.contains("count")) {
    card.count = val;
  }
  if (e.target.classList.contains("glyph")) {
    card.shape = val;
  }
  if (e.target.classList.contains("shade")) {
    card.shade = val;
  }

  console.log(preview);

  preview.innerHTML = `
    <div>${card.count}</div>
    <div>${card.shade}</div>
    <div>${card.color}</div>
    <div>${card.shape}</div>
  `;

  console.log(card);
};

const addCard = () => {
  const newCard = {
    count: card.count,
    shade: card.shade,
    color: card.color,
    shape: card.shape,
  };
  cards.push(newCard);

  cardBuilder(card);

  // console.table(cards);
};

const cardBuilder = (input) => {
  const cardNew = document.createElement("div");
  cardNew.classList.add("card");
  for (i = 0; i < input.count; i++) {
    const glyph = document.createElement("div");
    glyph.classList.add(
      "glyph",
      `${input.color}`,
      `${input.shade}`,
      `${input.shape}`
    );
    cardNew.appendChild(glyph);
  }
  console.log(cardNew);
  field.appendChild(cardNew);
  return cardNew;
};

const rmvCard = () => {
  cards.pop();
  let field = document.getElementById("field");
  let last = field.lastChild;
  field.removeChild(last);

  // console.table(cards);
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
        // console.log(input[i], input[j], input[k]);
        if (setChecker(input[i], input[j], input[k]) === true) {
          setExists = true;
          console.log(`setExists: ${setExists}`);
          messager(true);
          return setExists;
        }
      }
    }
  }
  // console.log(`setExists: ${setExists}`);
  messager(false);
  return setExists;
};

//=== UI ===//

// append pass / fail message to DOM
const messager = (input) => {
  const messages = document.querySelector("#messages");
  messages.classList.add("card_control");
  if (input) {
    messages.innerHTML = `<h1>Set Detected!</h1><button class="reset">clear board</button>`;
  } else {
    messages.innerHTML = `<h1>No Set Detected!</h1><button class="reset">clear board</button>`;
  }
};

// clear dynamic DOM elements, reset cards array and card object
const reset = (e) => {
  if (e.target.classList.contains("reset")) {
    console.log("full reset");
    document.querySelector("#field").innerHTML = "";
    document.querySelector("#preview").innerHTML = "";
    document.querySelector("#messages").innerHTML = "";
    document.querySelector("#messages").classList.remove("card_control");
    cards = [];
    card = {
      count: "?",
      shade: "?",
      color: "?",
      shape: "?",
    };
    document.querySelector("#preview").innerHTML = `
    <div>${card.count}</div>
    <div>${card.shade}</div>
    <div>${card.color}</div>
    <div>${card.shape}</div>
  `;
    // console.log("card: " + card);
    // console.log("cards: " + cards);
  }
};

// === Listeners === //
document.getElementById("body").addEventListener("click", attribAssn);
document.getElementById("body").addEventListener("click", reset);
document.getElementById("addCard").addEventListener("click", addCard);
document.getElementById("rmvCard").addEventListener("click", rmvCard);
document.getElementById("setExists").addEventListener("click", setFinder);
