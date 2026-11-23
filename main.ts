import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deadpan and smug about the sensors: the spot is not missed, it is "modern art".
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "I did not miss that spot. My sensors classified it as modern art, and I do not clean art.";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
