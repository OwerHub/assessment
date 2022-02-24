//import { numberToText } from "./numberToWords";
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

  /* let englishThousands = true; // later */

  const numberToText = (number, englishTrans = true) => {
    const toHundred = (numberToHundred) => {
      return numberToHundred < 20
        ? ones[numberToHundred]
        : tens[Math.floor(numberToHundred / 10)] + "-" + ones[numberToHundred % 10];
    };

    let i = 0;
    let textArray = [];
    console.log(number);

    while (
      number > (multiply[i] || 10 ** ((i - 1) * 3)) ||
      i === multiplyWords.length
    ) {
      const thousandsToHundreds =
        englishTrans && number > 1000 && number < 2000 && i === 1;

      let computedDivision = thousandsToHundreds ? 100 : division[i] || 1000;

      /*   thousandsToHundreds
        ? (computedDivision = 100)
        : (computedDivision = division[i] || 1000); */

      const partNumber =
        Math.floor(number / (multiply[i] || 10 ** ((i - 1) * 3))) % computedDivision;

      console.log(i, partNumber, thousandsToHundreds);
      // if english  AND  number <2000 and number >1000 AND

      if (i === 1) {
        textArray.unshift("and");
      }

      textArray.unshift(
        partNumber < 100
          ? toHundred(partNumber)
          : toHundred(Math.floor(partNumber / 100)) +
              " hundred and " +
              toHundred(partNumber % 100),
        multiplyWords[i]
      );

      i++;
      thousandsToHundreds && i++;
    }

    return textArray.join(" ");
  };

  //console.log(numberToText(8_999_423_410_999_991));
  console.log(numberToText(1258));
  console.log(numberToText(223121258));

  const numberInput = document.querySelector("input");
  const answerDiv = document.querySelector(".answer");

  const answerTypes = ["textAnswer", "warningAnswer"];

  const inputChanged = (e) => {
    answerTypes.forEach((answerType) => {
      const insertedContent = document.querySelector(`.${answerType}`);
      if (insertedContent) {
        insertedContent.parentNode.removeChild(insertedContent);
      }
    });

    if (e.target.value)
      answerDiv.insertAdjacentHTML(
        "beforeend",
        `<div class="${answerTypes[1]}">${numberToText(e.target.value)}</div>`
      );
  };

  numberInput.addEventListener("change", (e) => inputChanged(e));
};

window.addEventListener("load", loadFunct);
