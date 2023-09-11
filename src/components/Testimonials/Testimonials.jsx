import React, { useContext } from "react";
import "./Testimonials.css";
import { themeContext } from "../../Context";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MemberImage2 from '../../img/avatar2.jpg'
import MemberImage3 from '../../img/avatar3.jpg'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
    const motionHorizontal = {
        initial: { rotateY: 45 },
        whileInView: { rotateY: 0 },
        viewport: { margin: "0px" },
        transition: { duration: 1 }
    };

    const motionVertical = {
        initial: { rotateX: 90 },
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
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="testimonials" id="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <motion.div {...motionVertical}>
                            <Carousel responsive={responsive} infinite autoPlay>
                                <div className="item">
                                    <motion.p {...motionHorizontal} style={{ color: darkMode ? "#fff" : "" }}>
                                        <FaQuoteLeft />&nbsp; Chuyển đổi số không chỉ là cuộc cách mạng công nghệ, mà là một cách sống, một tư duy mới đưa chúng ta từ thế giới cổ điển vào tương lai số hóa. Số hóa là khởi đầu của sự tiến bộ, chuyển đổi số là hành trình của sự đổi mới.&nbsp;<FaQuoteRight />
                                    </motion.p>
                                    <div className="author">
                                        <img src={MemberImage3} alt="" />
                                        <span className="category">Developer</span>
                                        <h4>Huỳnh Tấn Dũng</h4>
                                    </div>
                                </div>
                                <div className="item">
                                    <motion.p {...motionHorizontal} style={{ color: darkMode ? "#fff" : "" }}>
                                        <FaQuoteLeft />&nbsp; Chuyển đổi số là cầu nối giữa quá khứ và tương lai, nền tảng để khám phá tiềm năng vô tận của công nghệ. Số hóa không chỉ là một xu hướng, mà là sự thích ứng, khéo léo và sáng tạo trong một thế giới ngày càng phức tạp. &nbsp;<FaQuoteRight />
                                    </motion.p>
                                    <div className="author">
                                        <img src={MemberImage2} alt="" />
                                        <span className="category">Leader</span>
                                        <h4>Lê Duy Lam</h4>
                                    </div>
                                </div>
                                <div className="item">
                                    <motion.p {...motionHorizontal} style={{ color: darkMode ? "#fff" : "" }}>
                                        <FaQuoteLeft />&nbsp; Số hóa và chuyển đổi số là cầu nối giữa thế giới hiện tại và tương lai, mang đến khả năng biến đổi thông tin và kiến thức thành ngôn ngữ kỹ thuật, mở ra những khả năng vô tận cho sự tiến bộ và sáng tạo. &nbsp;<FaQuoteRight />
                                    </motion.p>
                                    <div className="author">
                                        <img src={MemberImage3} alt="" />
                                        <span className="category">Developer</span>
                                        <h4>Danh Phi Long</h4>
                                    </div>
                                </div>
                            </Carousel>
                        </motion.div>
                    </div>
                    <div className="col-lg-5 align-self-center">
                        <div className="section-heading">
                            <motion.h6 {...motionLeft} style={{ color: darkMode ? "#fff" : "" }}>
                                KHẢO SÁT
                            </motion.h6>
                            <motion.h2 {...motionRight}>
                                Người trong ngành nói gì về chuyển đổi số
                            </motion.h2>
                            <motion.p {...motionVertical} style={{ color: darkMode ? "#fff" : "" }}>
                                Khi chuyển đổi số trở thành mục tiêu, sự thay đổi trở thành cơ hội và khả năng thành hiện thực. Đừng chỉ nhìn vào quá khứ, hãy nhìn về tương lai và số hóa là phương tiện để chúng ta tạo ra những điều tốt đẹp hơn.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
