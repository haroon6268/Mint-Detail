import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hygiene from "./components/Hygiene";
import Video from "./components/Video";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import { ThemeProvider, createTheme } from "@mui/material";
import Faq from "./components/Faq";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  const first = {
    title: "Have you considered the hygiene of your car's interior?",
    text: "According to a study by the University of Birmingham, your steering wheel alone hosts over 6 times more bacteria per square centimeter than your phone screen!",
    img: "/src/assets/hygiene.png",
  };
  const second = {
    title: "Mint Condition Every Time",
    text: "Our detailing experts don’t just skim the surface. They delve deep, banishing every speck of grime, gunk, and mystery crumbs. No more forgotten fries or stubborn stains; we bid adieu to pet hair and give your upholstery a new lease of life.",
    img: "/src/assets/carousel7.png",
  };

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
