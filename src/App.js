import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
const App = () => {
  const location = useLocation();
 
  return (
    <>
      
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location= {location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/projects">
            <Project />
          </Route>

          <Route path="/skills">
            <Skills />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
