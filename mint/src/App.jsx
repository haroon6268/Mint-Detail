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
import Address from "./components/Address";
import { useState, useEffect, useContext, createContext } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
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
    palette: {
      primary: {
        main: "#97e1b0",
      },
      secondary: {
        main: "#1d192e",
      },
    },
  });

  const [loc, setLoc] = useState({ lat: 22.54992, lng: 0 });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const x = pos.coords.latitude;
      const y = pos.coords.longitude;
      setLoc({ lat: x, lng: y });
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar></Navbar>
        <div style={{ overflow: "hidden" }}>
          <LocationContext.Provider value={[loc, setLoc]}>
            <APIProvider
              apiKey={import.meta.env.VITE_MAPS}
              libraries={["places"]}
            >
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/book" element={<Address />} />
              </Routes>
            </APIProvider>
            <Footer></Footer>
          </LocationContext.Provider>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
export const LocationContext = createContext();
