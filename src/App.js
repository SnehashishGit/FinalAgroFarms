
{/*import Navbar from "./components/Nav/Navbar"; */}
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Price from "./Pages/Price";




function App(){
  return(
    <>
      
    
    {/* <Navbar/> */}
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Price />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      
    </>
  )
}








export default App;
