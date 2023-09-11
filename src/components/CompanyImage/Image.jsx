import React from "react";
import {
    StackedCarousel, ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { motion } from "framer-motion";
import './Image.css';
import GDVNImage1 from '../../img/gdvn1.jpg';
import GDVNImage2 from '../../img/gdvn2.jpg';

const motionVertical = {
    initial: { rotateX: -90 },
    whileInView: { rotateX: 0 },
    viewport: { margin: "0px" },
    transition: { duration: 1 }
};
const motionHorizontal = {
    initial: { rotateY: -90 },
    whileInView: { rotateY: 0 },
    viewport: { margin: "0px" },
    transition: { duration: 1 }
};
export const data = [
    {
        cover: GDVNImage1,
        title: "Company member's birthday",
    },
    {
        cover: GDVNImage2,
        title: "Company member's birthday",
    },
    {
        cover: GDVNImage1,
        title: "Company member's birthday",
    },
    {
        cover: GDVNImage2,
        title: "Company member's birthday",
    }, {
        cover: GDVNImage1,
        title: "Company member's birthday",
    },
    {
        cover: GDVNImage2,
        title: "Company member's birthday",
    }, {
        cover: GDVNImage1,
        title: "Company member's birthday",
    },
    {
        cover: GDVNImage2,
        title: "Company member's birthday",
    },
];

export default function ImageCarousel(props) {
    const ref = React.useRef();
    return (
        <section id="companyImage">
            <div className="row justify-content-center text-center">
                <div className="container image-title">
                    <motion.h2 {...motionVertical}>
                        HOẠT ĐỘNG
                    </motion.h2>
                    <motion.h3  {...motionVertical}>
                        MỘT SỐ HOẠT ĐỘNG TẠI GD VIỆT NAM
                    </motion.h3>
                    <motion.p  {...motionVertical}>
                        Các hình ảnh tại ngôi nhà chung GD Việt Nam
                    </motion.p>
                </div>
            </div>
            <motion.div {...motionHorizontal} style={{ width: "100%", position: "relative" }}>
                <ResponsiveContainer
                    carouselRef={ref}
                    render={(parentWidth, carouselRef) => {
                        let currentVisibleSlide = 5;
                        if (parentWidth <= 1440) currentVisibleSlide = 3;
                        if (parentWidth <= 1080) currentVisibleSlide = 1;
                        return (
                            <StackedCarousel
                                ref={carouselRef}
                                slideComponent={Card}
                                slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                                carouselWidth={parentWidth}
                                data={data}
                                currentVisibleSlide={currentVisibleSlide}
                                maxVisibleSlide={5}
                                useGrabCursor
                            />
                        );
                    }}
                />
                <>
                    <Fab
                        style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
                        size="small"
                        color="default"
                        onClick={() => {
                            ref.current?.goBack();
                        }}>
                        <ArrowBackIcon />
                    </Fab>
                    <Fab
                        style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
                        size="small"
                        color="default"
                        onClick={() => { ref.current?.goNext(6); }}>
                        <ArrowForwardIcon />
                    </Fab>
                </>
            </motion.div>
        </section>
    );
}
export const Card = React.memo(function (props) {
    const { data, dataIndex } = props;
    const { cover } = data[dataIndex];
    return (
        <div
            style={{
                width: "100%",
                height: 400,
                userSelect: "none",
            }}
            className="my-slide-component"
        >
            <img
                style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 0,
                }}
                draggable={false}
                src={cover}
            />
        </div>
    );
});