import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    const motionCircleFacebook = {
        initial: { rotate: 180 },
        whileInView: { rotate: 0 },
        viewport: { margin: "45px" },
        transition: { duration: 1 }
    }
    const motionCircleYoutube = {
        initial: { rotate: -180 },
        whileInView: { rotate: 0 },
        viewport: { margin: "45px" },
        transition: { duration: 1 }
    }
    return (
        <footer id="footer">
            <div className="container-fluid footer">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h6 className="text-white mb-4">Văn Phòng</h6>
                            <p className="mb-2 contact-infor"><i className="fa fa-map-marker-alt me-2"></i>A1/48, Đường Số 5, Khu Dân Cư Nam Long, Phường Hưng Thạnh, Quận Cái Răng, Thành phố Cần Thơ</p>
                            <p className="mb-2 contact-infor"><i className="fa fa-phone-alt me-2"></i>0799 552 667</p>
                            <p className="mb-2 contact-infor"><i className="fa fa-envelope me-2"></i>info@gdvietnam.com</p>
                            <div className="d-flex pt-3">
                                <a className="btn-square rounded-circle me-2" href="https://www.facebook.com/gdvietnamtech">
                                    <FaFacebookF className="contact-social" />
                                </a>
                                <a className="btn-square rounded-circle me-2" href="https://www.youtube.com/channel/UCILcFScH4ChG1gc9zt1frUw">
                                    <TfiYoutube className="contact-social" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h6 className="text-white mb-4">Liên Kết</h6>
                            <Link className="footer-link" to="about"><FaAngleRight />&nbsp;Giới thiệu</Link>
                            <Link className="footer-link" to="mile"><FaAngleRight />&nbsp;Cột mốc</Link>
                            <Link className="footer-link" to="reivews"><FaAngleRight />&nbsp;Đánh giá</Link>
                            <Link className="footer-link" to="services"><FaAngleRight />&nbsp;Dịch vụ</Link>
                            <Link className="footer-link" to="team"><FaAngleRight />&nbsp;Đội ngũ</Link>
                        </div>
                        <div className="col-lg-3 col-md-6 contact-time">
                            <h6 className="text-white mb-4">Giờ Làm Việc</h6>
                            <p>Thứ Hai - Thứ Sáu</p>
                            <b className="text-light">08:00 am - 05:15 pm</b>
                            <p>Thứ Bảy</p>
                            <b className="text-light">08:00 am - 12:00 am</b>
                            <p >Chủ Nhật</p>
                            <b className="text-light">Không làm việc</b>
                        </div>
                        <div className="col-lg-3 col-md-6 contact-news">
                            <h6 className="text-white mb-4">Bản Tin</h6>
                            <p>Công ty Cổ phần Giải pháp Công nghệ GD Việt Nam chuyên cung cấp giải pháp và các phần mềm theo yêu cầu.</p>
                            <div className="position-relative w-100">
                                <input className="form-control bg-transparent w-100 py-2 ps-2 pe-5 text-white" type="email" placeholder="Email" />
                                <button type="button" className="btn btn-light py-1 position-absolute top-0 end-0 mt-2">Gửi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p>&copy; Copyrights ©2023 <Link className="fw-medium text-light" to="">GD Việt Nam</Link>, All Right Reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            &emsp;<Link className="fw-medium text-light" to="">Điều khoản</Link>
                            &emsp;<Link className="fw-medium text-light" to="">Chính sách</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
