"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={[
        "inline-flex items-center justify-center rounded-xl border px-3 py-2",
        "shadow-soft transition-colors",
        "border-black/10 bg-white/80 hover:bg-black/5",
        "dark:border-white/10 dark:bg-zinc-950/60 dark:hover:bg-white/5",
        "text-zinc-900 dark:text-zinc-100",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/20",
      ].join(" ")}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;
