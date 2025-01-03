import Navbar from "./component/Navbar/navbar";
import Intro from "./component/Intro/intro";
import Skills from "./component/About/Skills";
import Works from "./component/Projects/Works";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import React from 'react';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;