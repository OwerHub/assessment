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
    //bigint from here
    "quintillion",
  ];
  const multiply = [1, 100];
  const division = [100, 10, 100];

  const toHundred = (numberToHundred) => {
    return numberToHundred < 20
      ? ones[numberToHundred]
      : tens[Math.floor(numberToHundred / 10)] + "-" + ones[numberToHundred % 10];
  };

  const numberToText = (number, englishTrans = true) => {
    const isNegative = number < 0;
    let textArray = [];
    number = Math.abs(number);

    if (!number) {
      return ["Gimme' Numbers!", true];
    }

    if (number >= Number.MAX_SAFE_INTEGER) {
      return ["This number is out of my workspace", true];
    }

    if (number === 0) {
      return ["zero", false];
    }

    if (number === 1) {
      textArray = ["one", ""];
    }

    let i = 0;

    while (
      number > (multiply[i] || 10 ** ((i - 1) * 3)) ||
      i === multiplyWords.length
    ) {
      const thousandsToHundreds =
        englishTrans && number > 1000 && number < 2000 && i === 1;

      let computedDivision = thousandsToHundreds ? 100 : division[i] || 1000;

      const partNumber =
        Math.floor(number / (multiply[i] || 10 ** ((i - 1) * 3))) % computedDivision;

      //console.log(i, partNumber, thousandsToHundreds);

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

    isNegative && textArray.unshift("negative");

    return [textArray.join(" ").trim(), false];
  };

  const numberInput = document.querySelector("#numberInput");
  const answerDiv = document.querySelector(".answer");
  const typeChck = document.querySelector("#typeCheck");
  const answerTypes = ["textAnswer", "warningAnswer"];
  const convertButton = document.querySelector("button");

  const inputChanged = (e) => {
    // delete the last display
    answerTypes.forEach((answerType) => {
      const insertedContent = document.querySelector(`.${answerType}`);
      if (insertedContent) {
        insertedContent.parentNode.removeChild(insertedContent);
      }
    });

    const textFromNumber = numberToText(
      parseInt(numberInput.value),
      typeChck.checked
    );

    answerDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="${textFromNumber[1] ? answerTypes[1] : answerTypes[0]}">${
        textFromNumber[0]
      }</div>`
    );
  };

  convertButton.addEventListener("click", inputChanged);
  numberInput.addEventListener("change", inputChanged);
};

window.addEventListener("load", loadFunct);
