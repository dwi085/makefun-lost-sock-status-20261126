import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Day 9 as a toddler's puppet. I have a voice now. My partner's still in the drawer, unemployed and jealous.";

if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-120 chars, got ${LINE.length}`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outDir}/entry.txt`);
