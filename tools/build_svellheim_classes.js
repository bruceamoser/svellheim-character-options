const fs = require('node:fs');
const path = require('node:path');

console.log(
  '[DEPRECATED] This script previously generated a full class-text copy into docs/svellheim/compendium/05-classes.md.\n' +
    'That file is now a guidance-only reflavoring chapter. This script is intentionally disabled to prevent overwriting it.'
);
process.exit(0);

/**
 * Builds docs/svellheim/compendium/05-classes.md from the locally extracted
 * Draw Steel heroes text, keeping mechanics identical while reflavoring
 * setting prose for Svellheim.
 *
 * This is intended for private/local reference. Do not redistribute.
 */

const repoRoot = process.cwd();
const extractedPath = path.join(repoRoot, 'reference', 'draw-steel-docs', '_extracted', 'draw_steel_heroes_v1.01b.md');
const outPath = path.join(repoRoot, 'docs', 'svellheim', 'compendium', '05-classes.md');

function readLines(filePath) {
  return fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n').split('\n');
}

function sliceLines(lines, startLine1Based, endLine1BasedInclusive) {
  return lines.slice(startLine1Based - 1, endLine1BasedInclusive);
}

function applyReflavor(text) {
  // Conservative, mechanics-safe replacements.
  // Avoid touching keywords, numbers, damage types, conditions, etc.
  const replacements = [
    // World/setting nouns
    [/(\bOrden\b)/g, 'Svellheim'],
    [/(\bVasloria\b)/g, 'the southern kingdoms'],
    [/(\bCapital\b)/g, 'Hrafnborg'],
    [/(\bSea of Stars\b)/g, 'the World-Tree\'s branches'],
    [/(\btimescape\b)/gi, 'world-roots'],

    // Religion framing
    [/\bchurch\b/gi, 'temple'],
    [/\bclergy\b/gi, 'templefolk'],
    [/\bChapter 14: \s*Gods and Religion\b/gi, 'the Svellheim pantheon (see docs/svellheim/codex/03-the-pantheon-of-svellheim.md)'],
    [/\bsaint or god\b/gi, 'god or hall-saint'],
    [/\bgod or saint\b/gi, 'god or hall-saint'],
    [/\b(?<!hall-)saints\b/gi, 'hall-saints'],
    [/\b(?<!hall-)saint\b/gi, 'hall-saint'],
    [/\bheretics\b/gi, 'oathbreakers'],

    // Tone tweaks
    [/\bPrimordial Chaos\b/g, 'the corpse-world\'s old fury'],
  ];

  let out = text;
  for (const [pattern, replacement] of replacements) {
    out = out.replace(pattern, replacement);
  }

  // Light-touch line rewrites for common standalone flavor sentences.
  // These are intentionally minimal to reduce risk of altering rules meaning.
  out = out.replace(
    /You utter a prayer that outlines your foe in holy energy\./g,
    'You speak a witnessed vow that marks your foe in oath-light.'
  );
  out = out.replace(
    /You channel some of your vitality into more resilience for you or an ally\./g,
    'You trade breath and pain for resilience—yours or an ally\'s.'
  );

  // Quick Build deity examples: remove core-setting deity names.
  out = out.replace(
    /\(Quick Build: Cavall as deity and War as domain\.\)/g,
    '(Quick Build: Choose a Svellheim god and War as domain.)'
  );
  out = out.replace(
    /\(Quick Build: Adûn for deity, and Life and Protection as domains\.\)/g,
    '(Quick Build: Choose a Svellheim god, and Life and Protection as domains.)'
  );

  return out;
}

function main() {
  if (!fs.existsSync(extractedPath)) {
    console.error(`Missing extracted reference: ${extractedPath}`);
    process.exit(2);
  }

  const lines = readLines(extractedPath);

  // Line ranges are based on the extracted file currently in this repo.
  // If the extraction changes, update these boundaries.
  const ranges = [
    { name: 'CENSOR', start: 8181, end: 9686 },
    { name: 'CONDUIT', start: 9687, end: 11519 },
    { name: 'ELEMENTALIST', start: 11520, end: 13292 },
    { name: 'FURY', start: 13293, end: 14812 },
    { name: 'NULL', start: 14813, end: 16046 },
    { name: 'SHADOW', start: 16047, end: 17246 },
    { name: 'TACTICIAN', start: 17247, end: 18436 },
    { name: 'TALENT', start: 18437, end: 19868 },
    { name: 'TROUBADOUR', start: 19869, end: 21290 },
  ];

  const header = ['# 05. Classes (Svellheim)', ''].join('\n');

  const pieces = [header];

  for (const r of ranges) {
    const chunk = sliceLines(lines, r.start, r.end).join('\n');
    const flavored = applyReflavor(chunk);
    pieces.push(flavored.trimEnd());
    pieces.push('');
    pieces.push('');
  }

  const out = pieces.join('\n').replace(/\n{3,}/g, '\n\n');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, out, 'utf8');

  console.log(`Wrote: ${outPath}`);
}

main();
