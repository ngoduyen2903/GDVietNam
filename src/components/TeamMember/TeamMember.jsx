import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./TeamMember.css";
import MissMoi from '../../img/NgocMoi.jpg'
import MissLinh from '../../img/ThaoLinh.jpg'
import MrDung from '../../img/TanDung.jpg'
import MrLinh from '../../img/NhutLinh.jpg'
import MrHo from '../../img/DongHo.jpg'
import MrLam from '../../img/DuyLam.jpg'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";

const TeamMember = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const motionHorizontal = {
        initial: { rotateY: -90 },
        whileInView: { rotateY: 0 },
        viewport: { margin: "0px" },
        transition: { duration: 1 }
    };
    const motionCircle = {
        initial: { rotate: -45 },
        whileInView: { rotate: 0 },
        viewport: { margin: "0px" },
        transition: { duration: 2, type: "spring" }
    }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <section id="team" className="team">
            <div className="row justify-content-center text-center">
                <div className="container team-title">
                    <h2>ĐỘI NGŨ</h2>
                    <motion.h3 style={{ color: darkMode ? "#fff" : "" }} {...motionHorizontal}>
                        ĐỘI NGŨ CHUYÊN NGHIỆP
                    </motion.h3>
                    <motion.p style={{ color: darkMode ? "#fff" : "" }} {...motionHorizontal}>
                        Trẻ trung, năng động, tâm huyết và có trình độ
                    </motion.p>
                </div>
            </div>
            <div className="container mb-3">
                <motion.div {...motionHorizontal}>
                    <div className="row gy-5">
                        <Slider {...settings}>
                            <div class="card">
                                <div class="box1"></div>
                                <div class="img-area"><img src={MissLinh} alt="" /></div>
                                <div class="main-text">
                                    <h2>Nguyễn Ngọc Thảo Linh</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate recusandae quam amet
                                        enim voluptates alias accusantium sapiente! Adipisci vero fugiat aliquid explicabo quas
                                        eius!</p>
                                </div>
                            </div>  <div class="card">
                                <div class="box1"></div>
                                <div class="img-area"><img src={MissLinh} alt="" /></div>
                                <div class="main-text">
                                    <h2>Nguyễn Ngọc Thảo Linh</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate recusandae quam amet
                                        enim voluptates alias accusantium sapiente! Adipisci vero fugiat aliquid explicabo quas
                                        eius!</p>
                                </div>
                            </div>  <div class="card">
                                <div class="box1"></div>
                                <div class="img-area"><img src={MissLinh} alt="" /></div>
                                <div class="main-text">
                                    <h2>Nguyễn Ngọc Thảo Linh</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate recusandae quam amet
                                        enim voluptates alias accusantium sapiente! Adipisci vero fugiat aliquid explicabo quas
                                        eius!</p>
                                </div>
                            </div>  <div class="card">
                                <div class="box1"></div>
                                <div class="img-area"><img src={MissLinh} alt="" /></div>
                                <div class="main-text">
                                    <h2>Nguyễn Ngọc Thảo Linh</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate recusandae quam amet
                                        enim voluptates alias accusantium sapiente! Adipisci vero fugiat aliquid explicabo quas
                                        eius!</p>
                                </div>
                            </div>  <div class="card">
                                <div class="box1"></div>
                                <div class="img-area"><img src={MissLinh} alt="" /></div>
                                <div class="main-text">
                                    <h2>Nguyễn Ngọc Thảo Linh</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate recusandae quam amet
                                        enim voluptates alias accusantium sapiente! Adipisci vero fugiat aliquid explicabo quas
                                        eius!</p>
                                </div>
                            </div>  <div class="card">
                                <div class="box1"></div>
                                <div class="img-area"><img src={MissLinh} alt="" /></div>
                                <div class="main-text">
                                    <h2>Nguyễn Ngọc Thảo Linh</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate recusandae quam amet
                                        enim voluptates alias accusantium sapiente! Adipisci vero fugiat aliquid explicabo quas
                                        eius!</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamMember;
