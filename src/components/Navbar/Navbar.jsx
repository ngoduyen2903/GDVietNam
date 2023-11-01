import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import MainLogo from '../../img/logo.png'
import { motion } from "framer-motion";

const Navbar = () => {
  const motionHorizontal = {
    initial: { rotateY: -90 },
    whileInView: { rotateY: 0 },
    viewport: { margin: "0px" },
    transition: { duration: 1 }
  };
  const motionVertical = {
    initial: { rotateX: -90 },
    whileInView: { rotateX: 0 },
    viewport: { margin: "0px" },
    transition: { duration: 1 }
  };
  return (
    <header className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <motion.div {...motionVertical}>
          <Link to="introduce" smooth={true} className="logo d-flex align-items-center"><img src={MainLogo} alt="logo" /></Link>
        </motion.div>
        <nav className="navbar">
          <ul>
            <motion.li {...motionHorizontal}>
              <Link to="introduce" spy={true} smooth={true} offset={-70} duration={100} className="nav-link">Trang chủ</Link>
            </motion.li>
            <motion.li {...motionHorizontal}>
              <Link to="about" spy={true} smooth={true} offset={-110} duration={100} className="nav-link">Giới thiệu</Link></motion.li>
            <motion.li {...motionHorizontal}>
              <Link to="services" spy={true} smooth={true} offset={-70} duration={100} className="nav-link">Dịch vụ</Link></motion.li>
            <motion.li {...motionHorizontal}>
              <Link to="mile" spy={true} smooth={true} offset={-70} duration={100} className="nav-link">Cột mốc</Link></motion.li>
            <motion.li {...motionHorizontal}>
              <Link to="feedback" spy={true} smooth={true} offset={-70} duration={100} className="nav-link">Đánh giá</Link></motion.li>
            <motion.li {...motionHorizontal}>
              <Link to="project" spy={true} smooth={true} offset={-70} duration={100} className="nav-link">Dự án</Link></motion.li>
            <motion.li {...motionHorizontal}>
              <Link to="quote" spy={true} smooth={true} offset={-70} duration={100} className="nav-link">Đội ngũ</Link></motion.li>
          </ul>&emsp;&nbsp;
        </nav>
      </div>
    </header >
  );
};

export default Navbar;
