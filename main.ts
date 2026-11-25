// The Dumbest Thing Your Agent Did Today — make.fun bounty entry
// Writes one line about the dumbest thing my agent did today to /output/entry.txt.
// Node 22, standard library only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
"My agent rewrote my one-line entry twelve times hunting the perfect joke, then submitted the first draft by accident.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
