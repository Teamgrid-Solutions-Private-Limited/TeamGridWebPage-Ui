import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme.js";
import Home from './components/Home.jsx'
import { Routes , Route } from 'react-router-dom';
import Whatwedo from './components/whatwedo/whatwedo.jsx';
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import LetsBuildTogether from './components/LetsBuildTogether.jsx';
import WhatWeOffer from './components/whatwedo/Whatweoffer.jsx';
// import Home from './components/Home/Home.jsx';
function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/whatwedo' element = {<Whatwedo/>}/>
      </Routes>
      {/* <LetsBuildTogether/>
      <Footer/> */}
      {/* <Home/> */}
      </ThemeProvider>
    </>
  )
}

export default App
