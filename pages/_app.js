import { ThemeProvider } from "@mui/material";
import { lightTheme } from "@/themes/theme";

import '@/styles/globals.css'
import MainLayout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}
