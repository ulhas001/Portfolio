import React from "react";
import Cards from "../Cards/Cards";
import imgcov from "../images/cov.jpg";
import web from "../images/website.svg";
import todo from "../images/todonew.svg";
// import sideimg from '../images/sideimg.jpg'
import cli from "../images/cli.svg";
import "./Porject.css";
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
const Project = () => {
  return (
    <>
      <motion.div initial="out" animate="in" exit="out" variants= {pagevairant} transition={pageTransition}>
        <section className="container text-center">
          <h1 className="text-center mb-5">P R O J E C T S </h1>
          <div className="row ms-4">
            <div className="col-lg-4 col-md-12 mt-2 ">
              <Cards
                cardimg={imgcov}
                title="Covid-19 Tracker"
                cardtext=""
                link="https://trackcovid19status.netlify.app/"
                somewhere="Click Here"
              />
            </div>
            <div className="col-lg-4 col-md-12 mt-2 ">
              <Cards
                cardimg={todo}
                title="ToDo-List "
                cardtext=""
                link="https://floating-cliffs-97410.herokuapp.com/"
                somewhere="Click Here"
              />
            </div>
            <div className="col-lg-4 col-md-12 mt-2 ">
              <Cards
                cardimg={web}
                title="Converter-Website"
                cardtext=""
                link="https://yttomp3.netlify.app"
                somewhere="Click Here"
              />
            </div>
          </div>
          <div className="row mt-2 second-row ms-4">
            <div className="col-lg-4 col-md-12 mt-2 ">
              <Cards
                cardimg={cli}
                title="Client-Server-connection in Python"
                cardtext=""
                link="https://github.com/ulhas001/client-server-project"
                somewhere="Click Here"
              />
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Project;
