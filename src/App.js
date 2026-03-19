import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/themes";
import SakuraCanvas from "./components/Sakura/SakuraCanvas";
import Navbar from "./components/Navbar/Navbar";
import HeroNew from "./components/Hero/HeroNew";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ContactNew from "./components/Contact/ContactNew";
import styled from "styled-components";
import {useState} from "react";
import React  from "react";


const Main = styled.div`
  position: relative;
  z-index: 1; /* ensure content is above canvas */
`;


function App() {
  const [petalsOn, setPetalsOn] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
{/* 🌸 Floating sakura petals */}
      <SakuraCanvas intensity="calm" density="auto" />
      <Main>
      <Navbar petalsOn={!petalsOn} setPetalsOn={setPetalsOn} />
      <HeroNew />
      <About />
      <Projects />
      <ContactNew />
      </Main>
    </ThemeProvider>
    
  );
}

export default App;
