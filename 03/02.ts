import { isNumeric, rawInput } from "./input";

const base = rawInput.split("mul(");
// const base =
//   `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`.split(
//     "mul(",
//   );

let doo = true;
const dos: string[] = [];
let total = 0;

for (let i = 0; i < base.length; i++) {
  // check if the element contains dont
  // if it doesnt, set doo as false,
  // add elemt to the array when do is true
  // dont add elemnt when do is false

  const containsDont = base[i].includes("don't()");
  const containsDo = base[i].includes("do()");

  if (doo) {
    dos.push(base[i]);
  }

  if (containsDont) {
    doo = false;
  }

  if (containsDo) {
    doo = true;
  }
}

dos
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
