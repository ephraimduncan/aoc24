import { isNumeric, rawInput } from "./input";

let total = 0;

rawInput
  .split("mul(")
  .filter((e) => e.includes(","))
  .map((e) => e.split(",").slice(0, 2))
  .map((e) => {
    const first = e[0];
    const second = e[1].split(")").slice(0, 1)[0];

    if (isNumeric(second) && isNumeric(first)) {
      return [parseInt(first), parseInt(second)];
    } else {
      return [];
    }
  })
  .forEach((arr) => {
    if (arr.length === 0) {
      return;
    }

    total = total + arr[0] * arr[1];
  });

console.log(total);
