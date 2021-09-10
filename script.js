const cards = [
  { color: "red", shape: "squiggle", count: 3, fill: "solid" },
  { color: "red", shape: "squiggle", count: 3, fill: "hatch" },
  { color: "red", shape: "squiggle", count: 3, fill: "empty" },
  { color: "blue", shape: "pill", count: 3, fill: "solid" },
  { color: "blue", shape: "pill", count: 3, fill: "hatch" },
  { color: "blue", shape: "pill", count: 3, fill: "empty" },
  { color: "green", shape: "diamond", count: 3, fill: "solid" },
  { color: "green", shape: "diamond", count: 3, fill: "hatch" },
  { color: "green", shape: "diamond", count: 3, fill: "empty" },
];

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

// subsetChecker(1, 1, 1);

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

// setChecker(cards);

// compares every combination of three cards from an array, looking for a Set
// as soon as a Set is found, true is returned
const setFinder = (input) => {
  let setExists = false;
  // console.log(input.length);
  for (i = 0; i < input.length - 2; i++) {
    for (j = 1; j < input.length - 1; j++) {
      for (k = 2; k < input.length; k++) {
        console.log(input[i], input[j], input[k]);
        if (setChecker(input[i], input[j], input[k]) === true) {
          setExists = true;
          console.log(setExists);
          return setExists;
        }
      }
    }
  }
  console.log(`setExists: ${setExists}`);
  return setExists;
};

setFinder(cards);
