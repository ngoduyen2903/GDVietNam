import React, { useContext } from "react";
import "./About.css";
import { Link } from "react-scroll";
import AboutImage3 from '../../img/about-image.png';
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
import { BsCheck2Circle } from "react-icons/bs";
const About = () => {
    const motionVertical = {
        initial: { rotateX: -90 },
        whileInView: { rotateX: 0 },
        viewport: { margin: "0px" },
        transition: { duration: 1 }
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
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <section id="about" className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 about-left">
                        <motion.div className="image_2" {...motionVertical}>
                            <img src={AboutImage3} alt="" style={{ width: '100%' }} />
                        </motion.div>
                    </div>
                    <div className="col-md-6 about-right">
                        <motion.h1 className="about-title" style={{ color: darkMode ? "#fff" : "" }} {...motionLeft}>
                            HÃY ĐỂ CHÚNG TÔI GIÚP BẠN
                        </motion.h1>
                        <motion.p className="about_text" style={{ color: darkMode ? "#fff" : "" }} {...motionRight}>
                            Ngoài phục vụ số hóa và chuyển đổi số trong ngành giáo dục, GD Việt Nam còn cung cấp các dịch vụ, sản phẩm toàn diện trên các lĩnh vực
                        </motion.p>
                        <motion.div className="custom-list-item" style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>
                            <BsCheck2Circle className="about-icon-check" />&ensp;
                            <span className="us_text" style={{ color: darkMode ? "#fff" : "" }}>
                                Tư vấn đưa ra giải pháp số hóa, chuyển đổi số toàn diện
                            </span>
                        </motion.div>
                        <motion.div className="custom-list-item" style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>
                            <BsCheck2Circle className="about-icon-check" />&ensp;
                            <span className="us_text" style={{ color: darkMode ? "#fff" : "" }}>
                                Hỗ trợ các sản phẩm dự án
                            </span>
                        </motion.div>
                        <motion.div className="custom-list-item" style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>
                            <BsCheck2Circle className="about-icon-check" />&ensp;
                            <span className="us_text" style={{ color: darkMode ? "#fff" : "" }}>
                                Sản xuất video, tranh ảnh theo nhu cầu
                            </span>
                        </motion.div>
                        <motion.div className="custom-list-item" style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>
                            <BsCheck2Circle className="about-icon-check" />&ensp;
                            <span className="us_text" style={{ color: darkMode ? "#fff" : "" }}>
                                Cung cấp các dịch vụ công nghệ cho doanh nghiệp và hộ kinh doanh, cá nhân
                            </span>
                        </motion.div>
                        <motion.div {...motionVertical} className="about-button">
                            <Link className="btn btn-primary btn-sm btn-radius" to="about"><span>Xem thêm</span></Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
