import { ThemeProvider } from "@mui/material";
import { lightTheme } from "@/themes/theme";

import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}
