import { rawInput } from "./input";

const input = rawInput
  .split("\n")
  .map((l) => l.trim())
  .map((l) => l.split(" ").map((n) => parseInt(n)));

let count = 0;

for (let level of input) {
  const inc = [...level].sort((a, b) => a - b);
  const dec = [...level].sort((a, b) => b - a);
  const inc_dec =
    JSON.stringify(level) === JSON.stringify(inc) ||
    JSON.stringify(level) === JSON.stringify(dec);

  let isValid = true;

  for (let i = 0; i < level.length - 1; i++) {
    let diff = Math.abs(level[i] - level[i + 1]);

    if (diff > 3 || diff < 1) {
      isValid = false;
      break;
    }
  }

  if (inc_dec && isValid) {
    count = count + 1;
  }
}

console.log(count);
