export const normalizeDocsPath = (p: string) => {
  if (!p) {
    return "/";
  }

  const path = p.split("#")[0].split("?")[0];

  if (!path.startsWith("/")) {
    return path;
  }

  if (path === "/") {
    return "/";
  }

  if (path.includes(".")) {
    return path;
  }

  return path.endsWith("/") ? path : path + "/";
};
