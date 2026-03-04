import fs from "fs";
import path from "path";

const root = path.resolve(process.argv[2] ?? "public");

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

function listFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(fullPath));
      continue;
    }
    files.push(fullPath);
  }
  return files;
}

function isExternalRef(ref) {
  return (
    ref.startsWith("http://") ||
    ref.startsWith("https://") ||
    ref.startsWith("mailto:") ||
    ref.startsWith("tel:") ||
    ref.startsWith("javascript:") ||
    ref.startsWith("data:") ||
    ref.startsWith("//")
  );
}

function stripQueryAndHash(ref) {
  const hashIndex = ref.indexOf("#");
  const queryIndex = ref.indexOf("?");

  let cut = ref.length;
  if (hashIndex >= 0) cut = Math.min(cut, hashIndex);
  if (queryIndex >= 0) cut = Math.min(cut, queryIndex);

  return ref.slice(0, cut);
}

function resolveCandidates(ref, htmlDir) {
  const cleanedRef = stripQueryAndHash(ref);
  if (!cleanedRef || cleanedRef === "/") {
    return [path.join(root, "index.html")];
  }

  let decoded = cleanedRef;
  try {
    decoded = decodeURIComponent(cleanedRef);
  } catch {
    decoded = cleanedRef;
  }

  const basePath = decoded.startsWith("/")
    ? path.join(root, decoded.slice(1))
    : path.join(htmlDir, decoded);

  const candidates = [basePath];

  if (!path.extname(basePath)) {
    candidates.push(`${basePath}.html`);
    candidates.push(path.join(basePath, "index.html"));
  }

  if (decoded.endsWith("/")) {
    candidates.push(path.join(basePath, "index.html"));
  }

  return [...new Set(candidates)];
}

function extractRefs(htmlText) {
  const refs = [];
  const attrRegex = /(?:href|src)\s*=\s*["']([^"']+)["']/gi;

  for (const match of htmlText.matchAll(attrRegex)) {
    refs.push(match[1]);
  }

  return refs;
}

ensureExists("index.html");
ensureExists("sitemap.xml");
ensureExists("about/index.html");
ensureExists("projects/index.html");

const allFiles = listFiles(root);
const htmlFiles = allFiles.filter((file) => file.endsWith(".html"));

if (htmlFiles.length < 3) {
  fail(`Expected at least 3 HTML files in output, found ${htmlFiles.length}`);
}

const missingRefs = [];

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, "utf8").trim();

  if (!html) {
    fail(`Generated empty HTML file: ${path.relative(root, htmlFile)}`);
  }

  if (!html.toLowerCase().includes("<html")) {
    fail(`Generated file is not valid HTML-like output: ${path.relative(root, htmlFile)}`);
  }

  const htmlDir = path.dirname(htmlFile);
  const refs = extractRefs(html);

  for (const rawRef of refs) {
    const ref = rawRef.trim();
    if (!ref || ref.startsWith("#") || isExternalRef(ref)) {
      continue;
    }

    const candidates = resolveCandidates(ref, htmlDir);
    const exists = candidates.some((candidate) => fs.existsSync(candidate));

    if (!exists) {
      missingRefs.push({
        source: path.relative(root, htmlFile),
        ref,
      });
    }
  }
}

if (missingRefs.length > 0) {
  const lines = missingRefs
    .slice(0, 25)
    .map((entry) => `- ${entry.source} -> ${entry.ref}`)
    .join("\n");

  fail(
    `Found ${missingRefs.length} broken internal reference(s):\n${lines}${
      missingRefs.length > 25 ? "\n- ..." : ""
    }`,
  );
}

console.log(`Site verification passed. Checked ${htmlFiles.length} HTML files.`);
