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

function assertIncludes(text, needle, label) {
  if (!text.includes(needle)) {
    fail(`Expected ${label ?? `"${needle}"`} in ${currentFile}`);
  }
}

let currentFile = "index.html";
const indexHtml = readText(currentFile);

assertIncludes(indexHtml, "René Ullrich", "site owner name");
assertIncludes(indexHtml, "Automation", "automation focus");
assertIncludes(indexHtml, "rene@tronix.no", "contact email");

const aboutCandidates = ["about/index.html", "about.html"];
const aboutPath = aboutCandidates.find((candidate) =>
  fs.existsSync(path.join(root, candidate)),
);
if (!aboutPath) {
  fail("Missing About page (expected about/index.html or about.html)");
}
currentFile = aboutPath;
const aboutHtml = readText(aboutPath);
assertIncludes(aboutHtml, "About", "About page heading");

const projectsCandidates = ["projects/index.html", "projects.html"];
const projectsPath = projectsCandidates.find((candidate) =>
  fs.existsSync(path.join(root, candidate)),
);
if (!projectsPath) {
  fail("Missing Projects page (expected projects/index.html or projects.html)");
}

const attachmentCandidates = [
  "attachments/image_17.png",
  "attachments/siemensbatteryrecycling_plc_v2_compressed_2__1.png",
];
for (const relPath of attachmentCandidates) {
  ensureExists(relPath);
}

console.log("Site verification passed.");
