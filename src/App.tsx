import { ThemeProvider } from "styled-components"
import { defaulTheme } from "./styles/themes/default"

import { GlobalStyles } from "./styles/global"

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <h1>Github Blog</h1>

      <GlobalStyles />
    </ThemeProvider>
  )
}