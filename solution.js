// 1
const logThreeTimes = (a) => console.log("1:", a, a, a);
logThreeTimes("a");

// 2
const repeatFiveTimes = (a) => String(a) + a + a + a + a;
console.log("2:", repeatFiveTimes("Cat"));

// 3
const showRepeatedArgument = (num, str) => str.repeat(num);
console.log("3:", showRepeatedArgument(3, "Woah"));

// 4
let arr = [1, 6, 83, 91, 0, -4, 1337, 5];
const getLargestNumber = function (...a) {
  return Math.max(...a[0]);
};
console.log("4:", getLargestNumber(arr));

// 5
const checkIfDivisableTen = (a) => {
  if (a % 10 === 0) console.log("5(a):", "Even 10!");
};
checkIfDivisableTen(100);

for (let i = 1; i <= 125; i++) {
  checkIfDivisableTen(i);
  console.log("5(b):", i);
}

// 6
const getLargest = (a, b, c, d, e) => Math.max(a, b, c, d, e);
console.log("6:", getLargest(1, 2, 3, 4, 5));

// 7
const checkIfIsString = (a) => typeof a === "string";
console.log("7:", checkIfIsString("Am I a string?"));

// 8
const checkIsString = (a, b) => typeof a === "string" && typeof b === "string";
console.log("8:", checkIsString("Am I a string?", "and I?"));

// 9
const getFirstWord = (str) => str.split(" ")[0];
console.log("9:", getFirstWord("Hello World"));

// 10
const createRepeatedWordsString = (a) => {
  let strWords = a.split(" ");
  let newString = [];
  for (let i = 0; i < strWords.length; i++) {
    const word = strWords[i];
    for (let j = 0; j < strWords.length; j++) {
      newString.push(word);
    }
  }
  return newString.join(" ");
};
console.log("10:", createRepeatedWordsString("Oh yeah it works"));

// 11
const firstLetter = (a) => a[0];
console.log("11:", firstLetter("Alpha"));

// 12
const firstLetters = (a) => {
  let separateWords = a.split(" ");
  let strInitials = "";
  for (let i = 0; i < separateWords.length; i++) {
    strInitials += separateWords[i][0];
    // for (let j = 0; j < 1; j++) {
    //   strInitials += word[j];
    // }
  }
  return strInitials;
};
console.log("12:", firstLetters("Alpha Beta Gama"));

// 13
const checkLength = (a) => {
  if (Array.isArray(a) === true || typeof a === "string") {
    return a.length;
  } else {
    return null;
  }
};
console.log("13:", checkLength("hello bob"));

// 14
const checkIfItIsString = (a) => (typeof a === "string" ? a.split("") : null);
console.log("14:", checkIfItIsString("Am I a string?"));

// 15
const foo = (a) => (a.endsWith("o") ? "true" : "false");
console.log("15:", foo("woohoo"));

// 16
const bar = (a) => "Cat".concat(a.slice(2));
console.log("16:", bar("Tomato"));
