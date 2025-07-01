
import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TeamGridHomePage from "./componets/TeamGridHomePage"
import theme from './componets/theme'
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
      <TeamGridHomePage />
      </ThemeProvider>
    </>
  )
}

export default App
