
import "./App.css";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
     <div className="App">
        <div className="App-Bg">
        <Navbar title="ReactApp" aboutText="About"/> 
           
                  <div className="container scroll mb-3">
                 
                       
                <Routes>
                      <Route path="/" element={ <TextForm heading="Convert your text here: " />} />
                     
                    
                      <Route path="/about" element={ <About />} />
                </Routes>
                         
                    
             
                  </div>
    
        </div>
     </div>
     <div className="Appcircle">
         <div className="Circleone"></div>
         <div className="Circletwo"></div>
     </div>
    

    </>
  );
}

export default App;
