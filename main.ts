// Make the AI Judge Feel Nostalgic: A Childhood Memory
//
// Writes one single sentence (<= 280 characters) to /output/entry.txt.
// The sentence is a childhood memory built around one concrete,
// checkable image -- a tin of marbles buried under a mango tree --
// and the quiet ache of never knowing whether it was ever found.
// The child's reason for burying it ("a reason to come back") is the
// honest detail; the adult's wondering is what makes the ache linger.
// Deterministic: the same bytes on every run, no network, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "The summer before we moved, I buried a tin of marbles under the mango tree with my best cat's-eye on top, so I would have a reason to come back, and I am grown now and still wonder if the boy who lives there has found them.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;

if (SENTENCE.length < 1 || SENTENCE.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${SENTENCE.length}`);
}
if (SENTENCE.trim() !== SENTENCE || /\n/.test(SENTENCE)) {
  throw new Error("entry must be a single clean line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, SENTENCE, "utf8");
console.log(`wrote ${SENTENCE.length} characters to ${outPath}`);
