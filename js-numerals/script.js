const loadFunct = () => {
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

  const multiplyWords = ["", "hundred", "tousand", "million"];
  const multiply = [1, 100, 1000, 1000000, 10000000];
  const division = [100, 10, 1000, 1000];

  const numberToText = (number) => {
    const toHundred = (numberToHundred) => {
      if (numberToHundred < 20) {
        return ones[numberToHundred];
      }
      return (
        tens[Math.floor(numberToHundred / 10)] + " " + ones[numberToHundred % 10]
      );
    };

    let i = 0;
    let text = "";

    while (number > multiply[i]) {
      console.log("-----");
      const partNumber = Math.floor(number / multiply[i]) % division[i];

      if (partNumber < 100) {
        console.log(toHundred(partNumber));
      } else {
        console.log(
          toHundred(Math.floor(partNumber / 100)) +
            "hundred " +
            toHundred(partNumber % 100)
        );
      }
      console.log(multiplyWords[i]);
      i++;
    }
  };

  numberToText(1112345);
};

window.addEventListener("load", loadFunct);
