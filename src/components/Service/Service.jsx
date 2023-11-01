import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Service.css";
import { BsDatabaseFillUp } from "react-icons/bs";
import { RiVideoFill } from "react-icons/ri";
import { SiGooglemarketingplatform } from "react-icons/si";
import { SiPaloaltosoftware } from "react-icons/si";
import { AiFillSetting } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Service = () => {
    const motionVertical = {
        initial: { rotateX: -90 },
        whileInView: { rotateX: 0 },
        viewport: { margin: "0px" },
        transition: { duration: 1 }
    };
    const motionCircle180 = {
        initial: { rotate: 180 },
        whileInView: { rotate: 0 },
        viewport: { margin: "45px" },
        transition: { duration: 1 }
    }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <section id="services" className="services" style={{ backgroundColor: darkMode ? "#222529" : "" }} >
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="container service-title">
                        <h2>DỊCH VỤ</h2>
                        <motion.h3 style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>
                            DỊCH VỤ CỦA CHÚNG TÔI
                        </motion.h3>
                        <motion.p style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>
                            Các sản phẩm cũng như dịch vụ GD Việt Nam
                        </motion.p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6">
                        <motion.div {...motionVertical}>
                            <div className="cat-item d-block bg-blue text-center rounded p-3" to="">
                                <div className="rounded p-4 service-infor">
                                    <motion.div {...motionCircle180} className="icon mb-3">
                                        <BsDatabaseFillUp className="service-icon" />
                                    </motion.div>
                                    <h6>Phân tích dữ liệu</h6>
                                    <span>300+ đơn vị</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <motion.div {...motionVertical}>
                            <Link className="cat-item d-block bg-blue text-center rounded p-3" to="">
                                <div className="rounded p-4 service-infor">
                                    <motion.div {...motionCircle180} className="icon mb-3">
                                        <RiComputerFill className="service-icon" />
                                    </motion.div>
                                    <h6>Thiết bị công nghệ</h6>
                                    <span>105 sản phẩm</span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="col-lg-3 col-sm-6 " >
                        <motion.div {...motionVertical}>
                            <Link className="cat-item d-block bg-blue text-center rounded p-3" to="">
                                <div className="rounded p-4 service-infor">
                                    <motion.div {...motionCircle180} className="icon mb-3">
                                        <SiGooglemarketingplatform className="service-icon" />
                                    </motion.div>
                                    <h6>Hạ tầng mạng</h6>
                                    <span>50+ đơn vị</span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="col-lg-3 col-sm-6 " >
                        <motion.div {...motionVertical}>
                            <Link className="cat-item d-block bg-blue text-center rounded p-3" to="">
                                <div className="rounded p-4 service-infor">
                                    <motion.div {...motionCircle180} className="icon mb-3">
                                        <SiPaloaltosoftware className="service-icon" />
                                    </motion.div>
                                    <h6>Phần mềm</h6>
                                    <span>130 sản phẩm</span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="col-lg-3 col-sm-6 " >
                        <motion.div {...motionVertical}>
                            <Link className="cat-item d-block bg-blue text-center rounded p-3" to="">
                                <div className="rounded p-4 service-infor">
                                    <motion.div {...motionCircle180} className="icon mb-3">
                                        <AiFillSetting className="service-icon" />
                                    </motion.div>
                                    <h6>Marketing</h6>
                                    <span>36+ đơn vị</span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="col-lg-3 col-sm-6 ">
                        <motion.div {...motionVertical}>
                            <Link className="cat-item d-block bg-blue text-center rounded p-3" to="">
                                <div className="rounded p-4 service-infor">
                                    <motion.div {...motionCircle180} className="icon mb-3">
                                        <RiVideoFill className="service-icon" />
                                    </motion.div>
                                    <h6>Sản xuất video</h6>
                                    <span>390+ video</span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="col-lg-3 col-sm-6 " >
                        <motion.div {...motionVertical}>
                            <Link className="cat-item d-block bg-blue text-center rounded p-3" to="">
                                <div className="rounded p-4 service-infor">
                                    <motion.div {...motionCircle180} className="icon mb-3">
                                        <FaPaintBrush className="service-icon" />
                                    </motion.div>
                                    <h6>Đồ họa 2D & 3D</h6>
                                    <span>1308+ sản phẩm</span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <motion.div {...motionVertical}>
                            <Link className="cat-item d-block bg-blue text-center rounded p-3" to="">
                                <div className="rounded p-4 service-infor">
                                    <motion.div {...motionCircle180} className="icon mb-3">
                                        <MdOutlineSupportAgent className="service-icon" />
                                    </motion.div>
                                    <h6>Hỗ trợ</h6>
                                    <span>190+ đơn vị</span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
