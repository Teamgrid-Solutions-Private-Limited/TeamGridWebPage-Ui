
import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme";
import Homepage from './pages/Homepage';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Homepage/>
      </ThemeProvider>
    </>
  )
}

export default App
