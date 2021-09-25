import React from "react";
import Skillscard from "./Skillscard";
import "./Skills.css";
import img1 from "../images/python.png";
import img2 from "../images/react.png";
import img3 from "../images/javascript.png";
import img4 from "../images/css.png";
import img5 from "../images/html.png";
import img6 from '../images/nodejs.png'
import { motion } from "framer-motion";

const pagevairant ={
    in:{
      opacity:1,
      x:0
    },
    out:{
      opacity:0,
      x: "100vw"
    }
  }
  const pageTransition ={
    duration:0.8
  }
const Skills = () => {
  return (
    <>
    <motion.div initial="out" animate="in" exit="out" variants= {pagevairant} transition={pageTransition}>
    
      <section className="container p-4 mb-5 bg-body rounded ">
      <h1 className="text-center">S K L L S</h1>
        <div className="row ">
          <div className="col-lg-6 col-md-12  d-flex flex-column container">
            <Skillscard img={img1} title="Python" percent={{ width: "90%" }} />
            <Skillscard img={img2} title="Reactjs" percent={{ width: "70%" }} />
            <Skillscard img={img3} title="Javascript" percent={{ width: "70%" }}
            />
          </div>
          <div className="col-lg-6 col-md-12  d-flex flex-column container second-box">
            <Skillscard img={img4} title="CSS" percent={{ width: "90%" }} />
            <Skillscard img={img5} title="HTML" percent={{ width: "90%" }} />
            <Skillscard img={img6} title="Nodejs" percent={{ width: "90%" }} />
          </div>
        </div>
      </section>
      </motion.div>
    </>
  );
};

export default Skills;
