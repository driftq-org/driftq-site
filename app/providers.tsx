"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    storageKey="driftq-theme"
    themes={["light", "dark", "system"]}
  >
    {children}
  </NextThemesProvider>
);

export default Providers;
