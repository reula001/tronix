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
const heroMatch =
  indexHtml.includes("Automation Engineer") ||
  indexHtml.includes("about-title");
if (!heroMatch) {
  fail("Expected hero title in index.html.");
}
assertIncludes(indexHtml, "Contact me at:", "footer contact label", "index.html");
assertIncludes(indexHtml, "rene@tronix.no", "contact email", "index.html");

const requiredImages = [
  "images/image_17.png",
  "images/siemensbatteryrecycling_plc_v2_compressed_2__1.png",
  "images/siemens_logo_gray_1.png",
  "images/intek_gray_1.png",
  "images/ullrichtech_gray_1.png",
  "images/smart_logo_gray_1.png",
  "images/image.png",
];

for (const relPath of requiredImages) {
  ensureExists(relPath);
}

console.log("Site verification passed.");
