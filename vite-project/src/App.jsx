import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";

import Contact from "./sections/Contact";
import Projects from "./sections/Project";

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
