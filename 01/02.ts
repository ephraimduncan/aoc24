import { rawInput } from "./input";

const input = rawInput
  .trim()
  .split("\n")
  .map((n) => n.trim())
  .map((arr) => arr.split("   "));

const left = input.map((d) => parseInt(d[0]));
const right = input.map((d) => parseInt(d[1]));

const m = new Map<number, number>();

left.forEach((l) => {
  if (m.get(l)) {
    return;
  }

  right.forEach((r) => {
    if (l === r) {
      const ll = m.get(l);

      if (ll) {
        m.set(l, ll + 1);
      } else {
        m.set(l, 1);
      }
    }
  });
});

let sum = 0;

for (let i of m) {
  sum = sum + i[0] * i[1];
}

console.log(sum);
