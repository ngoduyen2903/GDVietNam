import "./Project.css";
import { v4 as uuidv4 } from "uuid";
import WebProject from "./WebProject";
import Carousel from "./Carousel";
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Software from './Software';
import Mobile from './Mobile';
import { motion } from "framer-motion";


const Project = () => {
    const motionVertical = {
        initial: { rotateX: -90 },
        whileInView: { rotateX: 0 },
        viewport: { margin: "0px" },
        transition: { duration: 1 }
    };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    let projectItem = [
        {
            key: uuidv4(),
            content: <WebProject />
        },
        {
            key: uuidv4(),
            content: <Mobile />
        },
        {
            key: uuidv4(),
            content: <Software />
        },
        {
            key: uuidv4(),
            content: <WebProject />
        },
        {
            key: uuidv4(),
            content: <Mobile />
        },
        {
            key: uuidv4(),
            content: <Software />
        }
    ];
    return (
        <section className="project" id="project">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="container project-title">
                        <h2>DỰ ÁN</h2>
                        <motion.h3 style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>
                            DỰ ÁN NỔI BẬT
                        </motion.h3>
                        <motion.p style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>
                            Chúng tôi đang quản lý nhiều dự án khởi nghiệp trên các lĩnh vực khác nhau
                        </motion.p>
                    </div>
                </div>
                <motion.div {...motionVertical}>
                    <Carousel cards={projectItem} height="500px" width="90%" margin="0 auto" offset={2} showArrows={false} />
                </motion.div>
            </div>
        </section>
    );
};

export default Project;
