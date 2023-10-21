import { fileURLToPath } from "url";
import { dirname } from "path";

export function getCurrentFilePath() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return {
    file: __filename,
    dir: __dirname,
  };
}

export function decodeHtmlEntities(text) {
  if (typeof text !== "string") {
    throw new Error(
      `Failed to decode HTML entity: invalid type ${typeof text}`
    );
  }

  let decoded = text;

  const entities = {
    "&amp;": "\u0026",
    "&quot;": "\u0022",
    "&#039;": "\u0027",
  };

  return decoded.replace(/&amp;|&quot;|&#039;/g, (char) => entities[char]);
}

export function removeLastTrailingSlash(url) {
  if (typeof url !== "string") return url;
  return url.replace(/\/$/, "");
}

export function removeExtraSpaces(text) {
  if (typeof text !== "string") return;
  return text.replace(/\s+/g, " ").trim();
}
