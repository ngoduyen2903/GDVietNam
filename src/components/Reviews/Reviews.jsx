import React, { useContext } from "react";
import "./Reviews.css";
import CustomerImage1 from '../../img/avatar1.jpg'
import CustomerImage2 from '../../img/avatar2.jpg'
import CustomerImage3 from '../../img/avatar3.jpg'
import { themeContext } from "../../Context";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "react-slick";

const Reviews = () => {
    const motionVertical = {
        initial: { rotateX: -90 },
        whileInView: { rotateX: 0 },
        viewport: { margin: "0px" },
        transition: { duration: 1 }
    };

    const motionCircle = {
        initial: { rotate: 45 },
        whileInView: { rotate: 0 },
        viewport: { margin: "0px" },
        transition: { duration: 2, type: "spring" }
    }
    const motionCircles = {
        initial: { rotate: 45 },
        whileInView: { rotate: 0 },
        viewport: { margin: "0px" },
        transition: { duration: 1, type: "spring" }
    }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    var customCarousel = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <section className="feedback" id="feedback">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="container feedback-title">
                        <h2>ĐÁNH GIÁ</h2>
                        <motion.h3 style={{ color: darkMode ? "#fff" : "" }}{...motionVertical}>ĐÁNH GIÁ TỪ KHÁCH HÀNG</motion.h3>
                        <motion.p style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>Khách hàng nói gì về các dịch vụ của chúng tôi</motion.p>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-2 d-none d-lg-block">
                        <div className="testimonial-left h-100">
                            <img src={CustomerImage1} alt="Customer" style={{ borderColor: darkMode ? "#fff" : "" }} />
                            <img src={CustomerImage2} alt="Customer" style={{ borderColor: darkMode ? "#fff" : "" }} />
                            <img src={CustomerImage3} alt="Customer" style={{ borderColor: darkMode ? "#fff" : "" }} />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <Slider {...customCarousel}>
                            <div className="testimonial-item text-center">
                                <motion.div {...motionCircle}>
                                    <img className="mx-auto mb-4" src={CustomerImage1} alt="Member" style={{ width: 150 }} />
                                </motion.div>
                                <p style={{ color: darkMode ? "#fff" : "" }}><FaQuoteLeft className="feedback-icon" />&nbsp;
                                    Tôi đã sử dụng sản phẩm và dịch vụ của công ty này trong một thời gian dài và tôi cảm thấy rất hài lòng với trải nghiệm của mình.
                                    &nbsp;<FaQuoteRight className="feedback-icon" /></p>
                                <h5 style={{ color: darkMode ? "#fff" : "" }}>Khách hàng</h5>
                                <span style={{ color: darkMode ? "#fff" : "" }}>Ngô Thị Cẩm Duyên</span>
                            </div>
                            <div className="testimonial-item text-center">
                                <motion.div {...motionCircle}>
                                    <img className="mx-auto mb-4" src={CustomerImage2} alt="Member" style={{ width: 150 }} />
                                </motion.div>
                                <p style={{ color: darkMode ? "#fff" : "" }}><FaQuoteLeft className="feedback-icon" />&nbsp;
                                    Dịch vụ phần mềm của Công ty GD Việt Nam đáp ứng tốt các yêu cầu của tôi. Sản phẩm được phát triển với chất lượng cao, ổn định và đáng tin cậy. Tôi cảm thấy hài lòng với hiệu suất và khả năng hoạt động của phần mềm.                                    &nbsp;<FaQuoteRight className="feedback-icon" /></p>
                                <h5 style={{ color: darkMode ? "#fff" : "" }}>Khách hàng</h5>
                                <span style={{ color: darkMode ? "#fff" : "" }}>Ngô Thị Cẩm Duyên</span>
                            </div>
                            <div className="testimonial-item text-center">
                                <motion.div {...motionCircle}>
                                    <img className="mx-auto mb-4" src={CustomerImage3} alt="Member" style={{ width: 150 }} />
                                </motion.div>
                                <p style={{ color: darkMode ? "#fff" : "" }}><FaQuoteLeft className="feedback-icon" />&nbsp;
                                    Giao diện người dùng của phần mềm rất thân thiện và dễ sử dụng. Tôi không gặp khó khăn khi làm quen với giao diện và các tính năng của phần mềm. Điều này giúp tôi tiết kiệm thời gian và năng lượng trong quá trình sử dụng.
                                    &nbsp;<FaQuoteRight className="feedback-icon" /></p>
                                <h5 style={{ color: darkMode ? "#fff" : "" }}>Khách hàng</h5>
                                <span style={{ color: darkMode ? "#fff" : "" }}>Ngô Thị Cẩm Duyên</span>
                            </div>
                            <div className="testimonial-item text-center">
                                <motion.div {...motionCircle}>
                                    <img className="mx-auto mb-4" src={CustomerImage1} alt="Member" style={{ width: 150 }} />
                                </motion.div>
                                <p style={{ color: darkMode ? "#fff" : "" }}><FaQuoteLeft className="feedback-icon" />&nbsp;
                                    Công ty GD Việt Nam cung cấp dịch vụ hỗ trợ khách hàng chuyên nghiệp và nhanh chóng. Tôi đã gặp một số vấn đề nhỏ khi sử dụng phần mềm, nhưng đội ngũ hỗ trợ đã giải quyết mọi vấn đề một cách nhanh chóng và hiệu quả. Họ luôn sẵn lòng lắng nghe và giải đáp mọi thắc mắc của tôi.
                                    &nbsp;<FaQuoteRight className="feedback-icon" /></p>
                                <h5 style={{ color: darkMode ? "#fff" : "" }}>Khách hàng</h5>
                                <span style={{ color: darkMode ? "#fff" : "" }}>Ngô Thị Cẩm Duyên</span>
                            </div>
                        </Slider>
                    </div>
                    <div className="col-lg-2 d-none d-lg-block">
                        <div className="testimonial-right h-100">
                            <img src={CustomerImage3} alt="Customer" style={{ borderColor: darkMode ? "#fff" : "" }} />
                            <img src={CustomerImage2} alt="Customer" style={{ borderColor: darkMode ? "#fff" : "" }} />
                            <img src={CustomerImage1} alt="Customer" style={{ borderColor: darkMode ? "#fff" : "" }} />
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Reviews;
