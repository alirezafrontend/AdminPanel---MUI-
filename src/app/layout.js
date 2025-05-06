"use client";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "@/lib/emotion";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProviderWrapper, useThemeMode } from "./context/ThemeContext";
import { darkTheme, lightTheme } from "@/lib/theme";

const cache = createEmotionCache();

function AppThemeProvider({ children }) {
  const { isDarkMode } = useThemeMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CacheProvider value={cache}>
          <ThemeProviderWrapper>
            <AppThemeProvider>
              <>{children}</>
            </AppThemeProvider>
          </ThemeProviderWrapper>
        </CacheProvider>
      </body>
    </html>
  );
}
