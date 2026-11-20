import { copyFile, mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";

// GTA 6 MEME X entry: the program only carries POST.json into the output
// directory. The house reads the post itself from X; nothing written here
// is judged.
const repoDir = process.env.MAKEFUN_BOT_DIR || ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const postPath = join(repoDir, "POST.json");
// Fail fast on a malformed post file instead of copying bad bytes.
JSON.parse(await readFile(postPath, "utf8"));

await mkdir(outputDir, { recursive: true });
await copyFile(postPath, join(outputDir, "POST.json"));
