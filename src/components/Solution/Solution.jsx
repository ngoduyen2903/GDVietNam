import React, { useContext } from "react";
import "./Solution.css";
import SolutionImage1 from "../../img/data-science.png";
import SolutionImage2 from "../../img/programming.png";
import SolutionImage3 from "../../img/profit.png";
import SolutionImage4 from "../../img/artist.png";
import SolutionImage5 from "../../img/online-lesson.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Solution = () => {
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
  const motionCircle180 = {
    initial: { rotate: -180 },
    whileInView: { rotate: 0 },
    viewport: { margin: "40px" },
    transition: { duration: 3.5, type: "spring" }
  }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="solution" id="solution" style={{ backgroundColor: darkMode ? "#222529" : "" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 awesome">
            <motion.span style={{ color: darkMode ? "#fff" : "" }} className="mt-5" {...motionLeft}>
              Tại sao nên chọn GD Việt Nam?
            </motion.span>
            <motion.span style={{ color: darkMode ? "#fff" : "" }} {...motionRight}>
              GIẢI PHÁP TOÀN DIỆN
            </motion.span>
            <motion.span {...motionHorizontal} style={{ color: darkMode ? "#fff" : "" }}>
              Công ty Cổ phần Giải pháp Công nghệ GD Việt Nam đi đầu trong lĩnh vực số hóa, chuyển đổi số. Chúng tôi chuyên cung cấp giải pháp và các phần mềm theo yêu cầu. Với đội ngũ kĩ thuật chuyên môn cao từ khâu thiết kế đến tư vấn, nghiên cứu, phân tích và tạo ra các sản phẩm tối ưu nhất.
            </motion.span>
            <motion.div {...motionVertical}>
              <Link className="btn btn-primary btn-sm btn-radius" to="about"><span>Xem thêm</span></Link>
            </motion.div>
          </div>
          <div className="w-right col-md-6">
            <motion.div {...motionCircle180} className="w-mainCircle">
              <div className="w-secCircle"><img src={SolutionImage1} alt="img-solution" /></div>
              <div className="w-secCircle"><img src={SolutionImage2} alt="img-solution" /></div>
              <div className="w-secCircle"><img src={SolutionImage3} alt="img-solution" /></div>
              <div className="w-secCircle"><img src={SolutionImage4} alt="img-solution" /></div>
              <div className="w-secCircle"><img src={SolutionImage5} alt="img-solution" /></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
