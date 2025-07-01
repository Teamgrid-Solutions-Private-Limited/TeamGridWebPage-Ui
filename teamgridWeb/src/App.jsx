import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme.js";
import Home from './components/Home.jsx'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home/>
      </ThemeProvider>
    </>
  )
}

export default App
