// main.ts — entrypoint for "The agent builds a game from one prompt".
// Copies POST.json (the X post address) from the repository into the output
// directory. That is all it has to do: the house reads the post itself.
// Run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Node 22+ (type stripping), standard library only, no network.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const botDir = process.env.MAKEFUN_BOT_DIR || dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const src = join(botDir, "POST.json");
if (!existsSync(src)) {
  console.error("POST.json not found in " + botDir);
  process.exit(1);
}
// Fail loudly on a malformed POST.json instead of copying a file the gate refuses.
let parsed;
try {
  parsed = JSON.parse(readFileSync(src, "utf8"));
} catch (e) {
  console.error("POST.json is not valid JSON: " + (e as Error).message);
  process.exit(1);
}
if (!parsed || typeof parsed.url !== "string" || !parsed.url.startsWith("https://")) {
  console.error("POST.json must be an object with a string url starting https://");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "POST.json");
copyFileSync(src, dest);
console.log("POST.json -> " + dest);
