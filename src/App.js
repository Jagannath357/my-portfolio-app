import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter} from 'react-router-dom';
import { useEffect, useRef, useState } from "react";


// function App() {
//   const topBarRef = useRef(null);
//   const toggleContainer = useRef(null);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleToggle = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     const addBgBlack = () => {
//       if (topBarRef.current) {
//         topBarRef.current.style.backgroundColor =
//           window.scrollY > 0 ? "#3e3c3c" : "transparent";
//       }
//     };

//     window.addEventListener("scroll", addBgBlack);
//     return () => window.removeEventListener("scroll", addBgBlack);
//   }, []);

//   return (
//     <div className="App">
//       <div className="navbar top-bar" ref={topBarRef} style={{backgroundColor: "transparent",transition:"background-color 0.3s ease"}}>
//         <div className="nav-logo">Portfolio</div>
//         <div className="ms-auto d-flex" id="navbarCollapse">
//             <div className={`nav-div gap-5 ${isMenuOpen ? "open" : ""}`} ref={toggleContainer}>
//                     <div className="item">Home</div>
//                     <div className="item">About</div>
//                     <div className="item">Skills</div>
//                     <div className="item">Projects</div>
//                     <div className="item">Contact</div>
//             </div>

//             <div className="nav-button ms-3">
//                 <i className="fa-solid fa-bars" style={{ display: isMenuOpen ? "none" : "block" }} onClick={handleToggle}></i>
//                 <i className="fa-solid fa-xmark" style={{ display: isMenuOpen ? "block" : "none" }} onClick={handleToggle}></i>
//             </div>
//         </div>
//       </div>
//       <div className="hero">
//         <h1>Hi, I'm Jagannath Padhi</h1>
//       </div>
//       <Home />
//           <About />
//           <Skills />
//           <Projects />
//           <Contact />
//       </div>
//   );
// }


// export default App;
function App() {
    const topBarRef = useRef(null);
    const addBgBlack = () => {
        console.log("Hello");
        if (topBarRef.current) {
            if (window.scrollY > 0) {
                topBarRef.current.style.backgroundColor = "#3e3c3c";
            } else {
                topBarRef.current.style.backgroundColor = "transparent";
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", addBgBlack);
        return () => window.removeEventListener("scroll", addBgBlack); // Clean up on unmount
    }, []);

  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const refFive = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

//   const [isOpen, setIsOpen] = useState(false);
const toggleOpen = useRef(null);

  const toggleClose = useRef(null);
  const toggleContainer = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const handleToggle = () => {
//   setIsOpen(!isOpen);
  setIsMenuOpen(prev => !prev);
};

  return (
    <BrowserRouter>
        <div className="App">
            <div className="navbar navbar-expand fs-6 fixed-top top-bar" ref={topBarRef} style={{ backgroundColor: "transparent", transition: "background-color 0.3s ease"}}>
              <div className="nav-item ms-5 text-light">Portfolio</div>
              <div className="ms-auto d-flex" id="navbarCollapse">
                  <div className={`nav-div ${isMenuOpen ? "open" : ""}`} ref={toggleContainer}>
                    <div className="nav-button ms-3 close-btn">
                        <i className="fa-solid fa-xmark" ref={toggleClose} style={{ display: isMenuOpen ? "initial" : "none" }} onClick={handleToggle}></i>
                    </div>
                        <div onClick={() => scrollTo(refOne)} className="item">Home</div>
                        <div onClick={() => scrollTo(refTwo)} className="item">About</div>
                        <div onClick={() => scrollTo(refThree)} className="item">Skills</div>
                        <div onClick={() => scrollTo(refFour)} className="item">Projects</div>
                        <div onClick={() => scrollTo(refFive)} className="item">Contact</div>
                  </div>
                    <div className="nav-button ms-3">
                        <i className="fa-solid fa-bars" ref={toggleOpen} style={{ display: isMenuOpen ? "none" : "initial" }} onClick={handleToggle}></i>
                    </div>
                    
                </div>
            </div>
          <div ref={refOne}><Home navigateContact={{refFive,refFour}} setNavigateContact={scrollTo}/></div>
          <div ref={refTwo}><About /></div>
          <div ref={refThree}><Skills /></div>
          <div ref={refFour} id="hello"><Projects /></div>
          <div ref={refFive}><Contact /></div>
        </div>
    </BrowserRouter>
  );
}

export default App;
