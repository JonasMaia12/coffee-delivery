import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyles } from "./styles/global"
import { HashRouter } from "react-router-dom"
import { Router } from "./Routes"
import { CartContextProvider } from "./contexts/CartContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <HashRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </HashRouter>
    </ThemeProvider>
  )
}
