import fs from "fs";
import path from "path";

const root = process.argv[2] ?? "public";

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

function ensureExists(relPath) {
  const fullPath = path.join(root, relPath);
  if (!fs.existsSync(fullPath)) {
    fail(`Missing required file: ${relPath}`);
  }
  return fullPath;
}

function readText(relPath) {
  const fullPath = ensureExists(relPath);
  return fs.readFileSync(fullPath, "utf8");
}

function assertIncludes(text, needle, label, fileLabel) {
  if (!text.includes(needle)) {
    fail(`Expected ${label ?? `"${needle}"`} in ${fileLabel}`);
  }
}

const indexHtml = readText("index.html");
assertIncludes(indexHtml, "René Ullrich", "site owner name", "index.html");
assertIncludes(indexHtml, "Automation Engineer", "headline", "index.html");
assertIncludes(indexHtml, "Featured projects", "featured projects section", "index.html");
assertIncludes(indexHtml, "rene@tronix.no", "contact email", "index.html");

ensureExists("projects/index.html");
ensureExists("about/index.html");

const requiredImages = [
  "attachments/image_17.png",
  "attachments/siemensbatteryrecycling_plc_v2_compressed_2__1.png",
];

for (const relPath of requiredImages) {
  ensureExists(relPath);
}

console.log("Site verification passed.");
