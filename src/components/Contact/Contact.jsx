import React from "react";
import cnt from "../images/email.png";
import phone from '../images/telephone.png'
import Contactcard from "./Contactcard";
import './Contact.css'
import img from '../images/mynewimage.png'
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
const Contact = () => {
  return (
    <>
    <motion.div initial="out" animate="in" exit="out" variants= {pagevairant} transition={pageTransition}>
    <h1 className="text-center mb-3">C O N T A C T M E</h1>
      <section className="container shadow-lg p-5 mb-4 bg-body rounded ">
      <div className="row">
        <div className="col-lg-6 col-md-6 ">
        <img src={img} className='img-fluid ' alt="" />
        </div>
        <div className="col-lg-6 col-md-6 ">
        <div className="container align-items-center d-flex flex-column  ">
        
        <Contactcard image={cnt} title="Email" cardtext="bhaleraoulhas01@gmail.com" />
        <Contactcard image={phone} title="Phone Number" cardtext="+919823845868" />
        </div>
        </div>
      </div>
        
      </section>
      </motion.div>
    </>
  );
};

export default Contact;
