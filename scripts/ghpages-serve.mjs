import http from "node:http";
import path from "node:path";
import { URL } from "node:url";
import { readFile, stat } from "node:fs/promises";

const OUT_DIR = path.resolve(process.cwd(), "out");
const PREFIX = "/DriftQ-Site";
const PORT = 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

function contentType(filePath) {
  return MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream";
}

function safeJoin(root, reqPath) {
  const full = path.normalize(path.join(root, reqPath));
  if (!full.startsWith(root)) {
    return null; // block path traversal
  }

  return full;
}

const server = http.createServer(async (req, res) => {
  try {
    const u = new URL(req.url, `http://${req.headers.host}`);
    let reqPath = u.pathname;

    // Simulate GitHub Pages project prefix: /DriftQ-Site/* -> /*
    if (reqPath === PREFIX || reqPath.startsWith(PREFIX + "/")) {
      reqPath = reqPath.slice(PREFIX.length) || "/";
    }

    // default document
    if (reqPath.endsWith("/")) reqPath += "index.html";

    const filePath = safeJoin(OUT_DIR, reqPath);
    if (!filePath) {
      res.writeHead(403);
      return res.end("Forbidden");
    }

    const s = await stat(filePath).catch(() => null);
    if (!s || !s.isFile()) {
      res.writeHead(404);
      return res.end("Not Found");
    }

    const buf = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType(filePath) });
    res.end(buf);
  } catch (e) {
    res.writeHead(500);
    res.end("Server error");
  }
});

server.listen(PORT, "0.0.0.0", () => console.log(`Serving ./out with GH Pages prefix at http://localhost:${PORT}${PREFIX}/`));
