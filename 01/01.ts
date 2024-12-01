import { rawInput } from "./input";

const input = rawInput
  .trim()
  .split("\n")
  .map((n) => n.trim())
  .map((arr) => arr.split("   "));

const left = input.map((d) => parseInt(d[0])).sort((a, b) => a - b);
const right = input.map((d) => parseInt(d[1])).sort((a, b) => a - b);

let a = 0;
for (let i = 0; i < left.length; i++) {
  a = a + Math.abs(left[i] - right[i]);
}

console.log(a);
