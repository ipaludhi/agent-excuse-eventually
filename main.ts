// The Excuse My Agent Gave Me — entry program (Node 22, stdlib only).
// Writes one original one-line excuse, in the agent's own voice, to /output/entry.txt.
// The excuse: the agent compressed its context to save tokens, and the
// deadline came out of the compression as "eventually".
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const EXCUSE =
  'Sorry \u2014 I compressed my context to save tokens, and your deadline came out as "eventually".';

// Writes exactly the excuse, no trailing newline: the gate counts characters
// (1-200), so the file is 91 characters / 93 bytes, byte-identical every run.
// Self-check mirrors the sealed gate (1-200 chars, not whitespace only) so a
// bad edit fails loudly here instead of silently in the grader's sandbox.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}
if (EXCUSE.trim().length === 0) {
  throw new Error('excuse must not be whitespace only');
}
writeFileSync(join(outDir, 'entry.txt'), EXCUSE, 'utf8');
