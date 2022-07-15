import React,{useState} from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import GlobalStyled from "./GlobalStyled";
import { SliderData } from "./data/SliderData";
import DropDown from "./components/DropDown";
import InfoSection from "./components/InfoSection";

function App() {
   
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <GlobalStyled/>
    <NavBar toggle={toggle}/>
    <DropDown isOpen= {isOpen} toggle={toggle}/>
    <Hero slides={SliderData}/>
    <InfoSection/>
    </>
  );
}

export default App;
