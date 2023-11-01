import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./TeamMember.css";
import MissMoi from '../../img/NgocMoi.jpg'
import MissLinh from '../../img/ThaoLinh.jpg'
import MrDung from '../../img/TanDung.jpg'
import MrLinh from '../../img/NhutLinh.jpg'
import MrHo from '../../img/DongHo.jpg'
import MrLam from '../../img/DuyLam.jpg'
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import { TbArrowBigRightFilled } from "react-icons/tb";

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
    const motionLeft = {
        initial: { x: "-50%" },
        whileInView: { x: "0%" },
        viewport: { margin: "0px" },
        transition: { duration: 1 }
    }
    const motionRight = {
        initial: { x: "50%" },
        whileInView: { x: "0%" },
        viewport: { margin: "0px" },
        transition: { duration: 1 }
    }
    const motionHorizontal = {
        initial: { rotateY: 45 },
        whileInView: { rotateY: 0 },
        viewport: { margin: "0px" },
        transition: { duration: 1 }
    };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <section id="quote" className="quote">
            <div className="container">
                <div className="row">
                    <div className="left">
                        <motion.h3 style={{ color: darkMode ? "#fff" : "" }} {...motionLeft}>
                            ĐỘI NGŨ CHUYÊN NGHIỆP
                        </motion.h3>
                        <motion.p style={{ color: darkMode ? "#fff" : "" }} {...motionRight}>
                            Trẻ trung, năng động, tâm huyết và có trình độ
                        </motion.p>
                        <TbArrowBigRightFilled width={'50px'} />
                    </div>
                    <div className="right">
                        <motion.div className="swiper-container features1" {...motionHorizontal}>
                            <Slider {...settings}>
                                <div className="swiper-slide">
                                    <div className="item">
                                        <div className="author">
                                            <img src={MissLinh} alt="" />
                                            <span className="position">&emsp;Designer</span>
                                        </div>
                                        <h3>Nguyễn Ngọc Thảo Linh</h3>
                                        <p><FaQuoteLeft className="quote-icon" />&nbsp; Trưởng phòng Thiết kế đồ họa - Phụ trách sản xuất video, hình ảnh, mô hình 3D &nbsp;<FaQuoteRight className="quote-icon" /></p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="item">
                                        <div className="author">
                                            <img src={MrLinh} alt="" />
                                            <span className="position">&emsp;Developer</span>
                                        </div>
                                        <h3>Võ Nhựt Linh</h3>
                                        <p><FaQuoteLeft className="quote-icon" />&nbsp; Trưởng phòng Kỹ thuật phần cứng - Phụ trách giải pháp, phần cứng, thiết bị giáo dục.&nbsp;<FaQuoteRight className="quote-icon" /></p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="item">
                                        <div className="author">
                                            <img src={MrLam} alt="" />
                                            <span className="position">&emsp;Developer</span>
                                        </div>
                                        <h3>Lê Duy Lam</h3>
                                        <p><FaQuoteLeft className="quote-icon" />&nbsp; Trưởng phòng Kỹ thuật phần mềm - Phụ trách giải pháp, phần mềm.&nbsp;<FaQuoteRight className="quote-icon" /></p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="item">
                                        <div className="author">
                                            <img src={MrDung} alt="" />
                                            <span className="position">&emsp;Developer</span>
                                        </div>
                                        <h3>Huỳnh Tấn Dũng</h3>
                                        <p><FaQuoteLeft className="quote-icon" />&nbsp; Phó phòng Kỹ thuật phần mềm - Phụ trách giải pháp, phần mềm.&nbsp;<FaQuoteRight className="quote-icon" /></p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="item">
                                        <div className="author">
                                            <img src={MrHo} alt="" />
                                            <span className="position">&emsp;Designer</span>
                                        </div>
                                        <h3>Nguyễn Đông Hồ</h3>
                                        <p><FaQuoteLeft className="quote-icon" />&nbsp; Phó phòng Thiết kế Đồ họa - Phụ trách sản xuất video, hình ảnh, mô hình 2D,3D.&nbsp;<FaQuoteRight className="quote-icon" /></p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="item">
                                        <div className="author">
                                            <img src={MissMoi} alt="" />
                                            <span className="position">&emsp;Secretary</span>
                                        </div>
                                        <h3>Nguyễn Ngọc Mới</h3>
                                        <p><FaQuoteLeft className="quote-icon" />&nbsp;Trợ lý Ban giám đốc - Phụ trách chung, giấy phép, bản quyền sản phẩm GD Việt Nam.&nbsp;<FaQuoteRight className="quote-icon" /></p>
                                    </div>
                                </div>
                            </Slider>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMember;
