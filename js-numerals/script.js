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

  const multiplyWords = [
    "",
    "hundred",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
  ];
  const multiply = [1, 100];
  const division = [100, 10, 100];

  let englishThousands = true; // later

  const numberToText = (number) => {
    const toHundred = (numberToHundred) => {
      return numberToHundred < 20
        ? ones[numberToHundred]
        : tens[Math.floor(numberToHundred / 10)] + "-" + ones[numberToHundred % 10];
    };

    let i = 0;
    let textArray = [];

    while (
      number > (multiply[i] || 10 ** ((i - 1) * 3)) ||
      i === multiplyWords.length
    ) {
      const partNumber =
        Math.floor(number / (multiply[i] || 10 ** ((i - 1) * 3))) %
        (division[i] || 1000);

      if (i === 1) {
        textArray.unshift("and");
      }

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

  console.log(numberToText(8_999_423_410_999_991));
  //console.log(numberToText());
};

window.addEventListener("load", loadFunct);
