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

  const multiplyWords = ["", "hundred", "tousand", "million", "billion", "trillion"];
  const multiply = [1, 100, 10 ** 3, 10 ** 6, 10 ** 9, 10 ** 12, 10 ** 15];
  const division = [100, 10, 100, 1000, 1000, 1000];

  let englishThousands = true;

  const numberToText = (number) => {
    const toHundred = (numberToHundred) => {
      return numberToHundred < 20
        ? ones[numberToHundred]
        : tens[Math.floor(numberToHundred / 10)] + "-" + ones[numberToHundred % 10];
    };

    let i = 0;
    let textArray = [];

    while (number > multiply[i] || i === multiply.length + 1) {
      const partNumber = Math.floor(number / multiply[i]) % division[i];

      if (i === 1) {
        textArray.unshift("and");
      }

      console.log(i, partNumber);
      //textArray.unshift(multiplyWords[i]);

      textArray.unshift(
        partNumber < 100
          ? toHundred(partNumber)
          : toHundred(Math.floor(partNumber / 100)) +
              " hundred and " +
              toHundred(partNumber % 100),
        multiplyWords[i]
      );

      i++;
    }

    return textArray.join(" ");
  };

  console.log(numberToText(134343343434234));
};

window.addEventListener("load", loadFunct);
