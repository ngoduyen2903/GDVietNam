import React, { useContext, useState } from "react";
import "./Introduce.css";
import { Link } from "react-scroll";
import IntroduceImage from '../../img/bg8.png'
import { themeContext } from "../../Context";
import 'react-modal-video/css/modal-video.min.css';
import VideoImage from '../../img/play.png';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import YouTube from 'react-youtube';

const Introduce = () => {
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
    <section id="introduce" className="introduce d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="center">
              <motion.div {...motionLeft}>
                <h2 style={{ color: darkMode ? "#fff" : "" }}>SỐ HÓA <br />VÀ CHUYỂN ĐỔI SỐ</h2>
              </motion.div>
              <motion.div {...motionRight}>
                <h6 style={{ color: darkMode ? "#fff" : "" }}>
                  <TypeAnimation
                    className="slogan"
                    sequence={[
                      'Cung cấp các giải pháp công nghệ toàn diện...',
                      1000,
                      'Công nghệ đột phá, giải pháp vượt trội...',
                      1000,
                      'Tận dụng công nghệ, thay đổi cuộc sống...',
                      1000,
                      'Xây dựng giải pháp công nghệ, mở ra thế giới mới...',
                      1000,
                      'Kết nối sáng tạo, mang lại giá trị bền vững...',
                      1000,
                      '',
                      1000,
                    ]}
                    style={{ color: darkMode ? "#fff" : "" }}
                    repeat={Infinity}
                    speed={75} />
                </h6>
              </motion.div>
            </div>
            <div>
              <Link className="btn btn-primary btn-sm btn-radius" to="about"><span>Xem thêm</span></Link>
              <div className="video d-inline">
                <Modal open={open} onClose={() => setOpen(false)} center closeOnOverlayClick showCloseIcon={false} classNames={{
                  overlayAnimationIn: 'customEnterOverlayAnimation',
                  overlayAnimationOut: 'customLeaveOverlayAnimation',
                  modalAnimationIn: 'customEnterModalAnimation',
                  modalAnimationOut: 'customLeaveModalAnimation',
                  overlay: 'customOverlay',
                  modal: 'customModal',
                }}
                  animationDuration={800}>
                  <YouTube videoId="UBzmP2ASx3I" opts={opts} className="gd-video" />
                </Modal>
                <img src={VideoImage} className="video-icon" alt="Video" />
                <span className="video-text" onClick={onOpenModal} style={{ color: darkMode ? "#fff" : "" }}>Xem Video</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 introduce-img"><img src={IntroduceImage} className="img-fluid" alt="Introduce" /></div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
