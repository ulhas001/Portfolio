import React from "react";
import me from '../images/myimg.jpg'
import './About.css'
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
const About = () => {
    return (
        <>
        <motion.div initial="out" animate="in" exit="out" variants= {pagevairant} transition={pageTransition}>
        <h1 className="text-center">A B O U T</h1>
        <section className="container ">
            <div className="row ">
                <div className="col-lg-6 col-md-12">
                    <img src={me} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-12 mt-5 text-center">
                    <p className="text-start"> I am Ulhas Bhalerao. Currently pursuing Computer Engineering B.Tech Degree in Lonavala 
                    Started web developement just by seeing other people but eventually I started loving development 
                    I Love to make user-friendly, fully-responsive and working website or webapps and still learning
                    to be great developer.If you want to know me or have a discussion, feel free to contact me! </p>
                    <ul className="text-start mt-5">
                        <li>Email: bhaleraoulhas01@gmail.com</li>
                        <li>PhoneNumber: +91 9823845868</li>
                        <li>City : Jalgaon</li>
                    </ul>
                    
                </div>
            </div>
        </section>
        </motion.div>
        </>
    )
}

export default About
