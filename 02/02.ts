import { rawInput } from "./input";
const input = rawInput
  .split("\n")
  .map((l) => l.trim())
  .map((l) => l.split(" ").map((n) => parseInt(n)));
let count = 0;
for (let i = 0; i < input.length; i++) {
  const currentLevel = input[i];

  const inc_original = [...currentLevel].sort((a, b) => a - b);
  const dec_original = [...currentLevel].sort((a, b) => b - a);
  let isValidOriginal = true;

  const originalMonotonic =
    JSON.stringify(currentLevel) === JSON.stringify(inc_original) ||
    JSON.stringify(currentLevel) === JSON.stringify(dec_original);

  for (let k = 0; k < currentLevel.length - 1; k++) {
    let diff = Math.abs(currentLevel[k] - currentLevel[k + 1]);
    if (diff > 3 || diff < 1) {
      isValidOriginal = false;
      break;
    }
  }

  if (originalMonotonic && isValidOriginal) {
    count++;
    continue;
  }

  for (let j = 0; j < currentLevel.length; j++) {
    const level = currentLevel.filter((_, idx) => idx !== j);
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
      break;
    }
  }
}
console.log(count);
