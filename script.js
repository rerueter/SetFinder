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

const setChecker = (input) => {
  let set = false;
  let chk = subsetChecker;
  let color = chk(input[0].color, input[1].color, input[2].color);
  let shape = chk(input[0].shape, input[1].shape, input[2].shape);
  let count = chk(input[0].count, input[1].count, input[2].count);
  let fill = chk(input[0].fill, input[1].fill, input[2].fill);
  if (color && shape && count && fill) {
    set = true;
  }
  console.log(`set: ${set}`);
  return set;
};

// setChecker(cards);

const setFinder = (input) => {
  let setExists = false;
  // console.log(input.length);
  for (i = 0; i < input.length - 2; i++) {
    for (j = 1; j < input.length - 1; j++) {
      for (k = 2; k < input.length; k++) {
        const toCheck = [input[i], input[j], input[k]];
        console.log(toCheck);
        if (setChecker(toCheck) === true) {
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
