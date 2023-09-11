import React, { useContext, useEffect } from "react";
import { themeContext } from "../../Context";
import "./Statistics.css";
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
import { Link } from "react-scroll";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import StatisticsImage from '../../img/statistics-bg.jpg';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
const Statistics = () => {
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
        <section id="statistics" className="statistics">
            <img src={StatisticsImage} alt="" />
            <div className="container position-relative">
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <span className="purecounter"></span>
                            <p>Khách hàng</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <span className="purecounter"></span>
                            <p>Dự án</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <span className="purecounter"></span>
                            <p>Số giờ hỗ trợ</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <span className="purecounter"></span>
                            <p>Nhân viên</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
