
import Gallery from "./Pages/Gallery/Gallery";

import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Price from "./Pages/Price";
import Nav from "./components/nav";

import GalleryPage1 from "./Pages/Gallery/GalleryPage1";
import GalleryPage2 from "./Pages/Gallery/GalleryPage2";



function App(){
  return (
 
      <>
    

    

   <Nav/>
        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Price />} />
        <Route path="contact" element={<Contact />} />
        


        <Route path="gallery" element={<Gallery />}>
            <Route path="page-1" element={<GalleryPage1 />} />
            <Route path="page-2" element={<GalleryPage2 />} />
          </Route>
        
      </Routes>
      </>
   
  )
}








export default App;
