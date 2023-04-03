import { ThemeProvider } from "@mui/material";
import { lightTheme } from "@/themes/theme";

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
