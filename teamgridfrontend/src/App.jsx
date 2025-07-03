
import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TeamGridHomePage from "./Home/TeamGridHomePage"
import theme from './componets/theme'
import WhatWeDoPage from './whatwedo/WhatWeDoPage';
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
      <TeamGridHomePage />
      {/* <WhatWeDoPage/> */}
      </ThemeProvider>
    </>
  )
}

export default App
