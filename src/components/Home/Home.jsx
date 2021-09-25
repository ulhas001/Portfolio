import React from "react";
import imghome from "../images/img3.svg";
import "./Home.css";
import { motion } from "framer-motion";

const pagevairant ={
  in:{
    opacity:1,
    x:0
  },
  out:{
    opacity:0,
    x: "-100vw"
  }
}
const pageTransition ={
  duration:0.8
}
const Home = () => {
  return (
    <>
    <motion.div initial="out" animate="in" exit="out" variants= {pagevairant} transition={pageTransition}>
    
      <section className="container text-center mt-5 shadow-lg p-5 mb-5 bg-body rounded">
        <div className="row ">
          <div className="col-lg-6 col-md-12">
            <p className="mb-3">Welcome To My Website </p>
            <h1 className="mb-3">
              I am a Mern Developer who's still learning to build awesome web applications
            </h1>
            <p className="mb-5">Wish You A Happy Visit</p>
            <div className="icons">
              <a href="https://github.com/ulhas001" target="_blank"><i class="github fab fa-github fa-3x"></i></a>
              <a href="https://www.linkedin.com/in/ulhas-bhalerao-44171a1b9/"><i class="fab fa-linkedin-in fa-3x"></i></a>
              <a href="https://www.instagram.com/ulhas_bhalerao/"><i class="fab fa-instagram fa-3x"></i></a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 text-center ">
            <img
              src={imghome}
              className="img-fluid mt-4"
              alt="..."
            />
          </div>
        </div>
      </section>
      
      </motion.div>
    </>
  );
};

export default Home;
