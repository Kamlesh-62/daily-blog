"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import StoreProvider from "./StoreProvider";
import { theme } from "@/theme";
import "../styles/globals.css";
import { AuthProvider } from "@/components/Provider/AppAuthenticatorProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>
        <AppRouterCacheProvider options={{ key: "mui", prepend: true, enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StoreProvider>
              <AuthProvider>
                <main >{children}</main>
              </AuthProvider>
            </StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}