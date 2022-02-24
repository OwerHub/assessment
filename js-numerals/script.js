const loadFunct = () => {
  console.log("im loaded");

  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  const toTwenty = (numberToTwenty) => {
    return ones[numberToTwenty];
  };

  const toHundred = (numberToHundred) => {
    if (numberToHundred < 20) {
      return ones[numberToHundred];
    }
    return tens[Math.floor(numberToHundred / 10)] + "-" + ones[numberToHundred % 10];
  };

  console.log(toHundred(99));
};

window.addEventListener("load", loadFunct);
