
import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TeamGridHomePage from "./Home/TeamGridHomePage";
import theme from './componets/theme';
import WhatWeDoPage from './whatwedo/WhatWeDoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<TeamGridHomePage />} />
          <Route path="/what-we-do/frontend" element={<WhatWeDoPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
