import React, { useContext } from "react";
import "./Mile.css";
import MileImage1 from '../../img/Mile1.png';
import MileImage2 from '../../img/Mile2.png';
import MileImage3 from '../../img/Mile3.png';
import MileImage4 from '../../img/Mile4.png';
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
import { TypeAnimation } from 'react-type-animation';

const Milestones = () => {

  const motionVertical = {
    initial: { rotateX: -90 },
    whileInView: { rotateX: 0 },
    viewport: { margin: "0px" },
    transition: { duration: 1 }
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="mile" id="mile">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="container mile-title">
            <h2>CỘT MỐC QUAN TRỌNG</h2>
            <motion.h3 style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>
              CÂU CHUYỆN CỦA CHÚNG TÔI
            </motion.h3>
            <motion.p style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>
              Quá trình phát triển của GD Việt Nam
            </motion.p>
          </div>
        </div>
        <div className="timeline">
          <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <motion.div {...motionVertical} className="col-10 col-md-5 order-3 order-md-1 timeline-content">
              <h3 className="text-light">Thời điểm hiện tại</h3>
              <p style={{ color: darkMode ? "#fff" : "" }}>
                <TypeAnimation
                  sequence={[
                    ' Hiện tại, GD Việt Nam có 5 team chính là Developers, Graphic Design, Content, Customer Service và Marketing với hơn 40 thành viên. Chúng tôi cùng chung sứ mệnh mang đến những sản phẩm công nghệ tốt nhất cho khách hàng', 1000,]}
                  repeat={Infinity}
                  speed={75}
                  style={{ fontSize: "14px" }} />
              </p>
            </motion.div>
            <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <img src={MileImage1} className="img-fluid" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time style={{ color: darkMode ? "#fff" : "" }}>01/06/2023</time>
            </div>
          </div>
          <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <motion.div {...motionVertical} className="col-10 col-md-5 order-3 order-md-1 timeline-content">
              <h3 className=" text-light">Phát triển môi trường làm việc tốt nhất</h3>
              <p style={{ color: darkMode ? "#fff" : "" }}>
                <TypeAnimation
                  sequence={[
                    ' GD Việt Nam chuyển về văn phòng mới với quy mô lớn hơn tọa lạc tại A1-48, đường số 5, KDC Nam Long, P. Hưng Thạnh, Q. Cái Răng, TP. Cần Thơ nhằm tạo môi trường tốt nhất cho nhân viên để mang đến những sản phẩm công nghệ tốt nhất cho khách hàng', 1000,]}
                  repeat={Infinity}
                  speed={75}
                  style={{ fontSize: "14px" }} />
              </p>
            </motion.div>
            <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <img src={MileImage2} className="img-fluid" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time style={{ color: darkMode ? "#fff" : "" }}>01/02/2023</time>
            </div>
          </div>
          <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <motion.div {...motionVertical} className="col-10 col-md-5 order-3 order-md-1 timeline-content">
              <h3 className=" text-light">Phát triển môi trường làm việc tốt nhất</h3>
              <p style={{ color: darkMode ? "#fff" : "" }}>
                <TypeAnimation
                  sequence={[
                    ' GD Việt Nam chuyển về văn phòng mới với quy mô lớn hơn tọa lạc tại A1-48, đường số 5, KDC Nam Long, P. Hưng Thạnh, Q. Cái Răng, TP. Cần Thơ nhằm tạo môi trường tốt nhất cho nhân viên để mang đến những sản phẩm công nghệ tốt nhất cho khách hàng', 1000,]}
                  repeat={Infinity}
                  speed={75}
                  style={{ fontSize: "14px" }} />
              </p>
            </motion.div>
            <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <img src={MileImage3} className="img-fluid" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time style={{ color: darkMode ? "#fff" : "" }}>01/02/2023</time>
            </div>
          </div>
          <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <motion.div {...motionVertical} className="col-10 col-md-5 order-3 order-md-1 timeline-content">
              <h3 className=" text-light">Thành lập Công ty Cổ phần giải pháp công nghệ GD Việt Nam</h3>
              <p style={{ color: darkMode ? "#fff" : "" }}>
                <TypeAnimation
                  sequence={[
                    ' GD Việt Nam thành lập không chỉ đại diện cho sự sáng tạo và khám phá. Sứ mệnh của chúng tôi là cung cấp các giải pháp công nghệ hiện đại, đột phá và tiên phong để nâng cao hiệu suất, tối ưu hóa quy trình và tạo ra trải nghiệm tuyệt vời cho khách hàng, đóng góp vào sự phát triển và chuyển đổi số của thế giới ngày nay.', 1000,]}
                  repeat={Infinity}
                  speed={75}
                  style={{ fontSize: "14px" }} />
              </p>
            </motion.div>
            <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <img src={MileImage4} className="img-fluid" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time style={{ color: darkMode ? "#fff" : "" }}>21/02/2022</time>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
