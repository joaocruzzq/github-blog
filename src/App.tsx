import { ThemeProvider } from "styled-components"
import { defaulTheme } from "./styles/themes/default"

import { GlobalStyles } from "./styles/global"

import { Router } from "./router"
import { BrowserRouter } from "react-router-dom"

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}