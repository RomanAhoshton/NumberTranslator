const romanNumbers = [
  {
    symbol: "I",
    value: 1,
  },
  {
    symbol: "V",
    value: 5,
  },
  {
    symbol: "X",
    value: 10,
  },
  {
    symbol: "L",
    value: 50,
  },
  {
    symbol: "C",
    value: 100,
  },
  {
    symbol: "D",
    value: 500,
  },
  {
    symbol: "M",
    value: 1000,
  },
];
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const output = document.querySelector(".output");
let num;

button.addEventListener("click", () => {
  if (input.value !== "") {
    let result = [];

    num = input.value;

    let stringArray = [];

    for (let i = 0; i < num.length; i++) {
      stringArray.push(num[i]);
    }

    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === "I" && stringArray[i + 1] === "V") {
        result.push(4);
        stringArray[i] = " ";
        stringArray[i + 1] = " ";
      } else if (stringArray[i] === "I" && stringArray[i + 1] === "X") {
        result.push(9);
        stringArray[i] = " ";
        stringArray[i + 1] = " ";

        console.log("9 work ");
      } else if (stringArray[i] === "X" && stringArray[i + 1] === "L") {
        result.push(40);
        stringArray[i] = " ";
        stringArray[i + 1] = " ";

        console.log("40 work ");
      } else if (stringArray[i] === "X" && stringArray[i + 1] === "C") {
        result.push(90);
        stringArray[i] = " ";
        stringArray[i + 1] = " ";
      } else if (stringArray[i] === "C" && stringArray[i + 1] === "D") {
        result.push(400);
        stringArray[i] = " ";
        stringArray[i + 1] = " ";
      } else if (stringArray[i] === "C" && stringArray[i + 1] === "M") {
        result.push(900);
        stringArray[i] = " ";
        stringArray[i + 1] = " ";
      } else {
        romanNumbers.forEach((item) => {
          if (item.symbol === stringArray[i]) {
            result.push(item.value);
          }
        });
      }
    }

    const initValue = 0;
    const sumWithInitial = result.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initValue
    );

    output.innerHTML = sumWithInitial;
  }
});
