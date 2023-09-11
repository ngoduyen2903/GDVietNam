import React, { useContext } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const Contact = () => {
    const ariaLabel = { 'aria-label': 'description' };
    const validationSchema = Yup.object({
        firstname: Yup.string().required('Họ không được trống!'),
        lastname: Yup.string().required('Tên không được trống!'),
        phone: Yup.string().matches(/^[0-9]+$/, 'Số điện thoại chưa hợp lệ!').required('Số điện thoại không được trống!'),
        email: Yup.string().email('Email chưa hợp lệ!').required('Email không được trống!'),
        content: Yup.string().required('Nội dung không được trống!'),
    });
    const handleSubmit = (values, { resetForm }) => {
        setTimeout(() => {
            showToastMessage();
            resetForm();
        }, 1000);
    };
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            content: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });
    const showToastMessage = () => {
        toast('Đã gửi thành công!', {
            position: "top-right",
            type: "success",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            closeButton: false
        });
    };
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
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <section className="contact" id="contact">
            <div className="container" >
                <div className="justify-content-center text-center">
                    <div className="container contact-title">
                        <h2>LIÊN HỆ</h2>
                        <motion.h3 style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>LIÊN HỆ VỚI CHÚNG TÔI</motion.h3>
                        <motion.p style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>Rất vui khi bạn liên hệ với chúng tôi</motion.p>
                    </div>
                </div>
                <motion.div {...motionHorizontal}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="info-box mb-4">
                                <i className="fa fa-map-marked"></i>
                                <h3 style={{ color: darkMode ? "#fff" : "" }}>Văn Phòng Làm Việc</h3>
                                <p style={{ color: darkMode ? "#fff" : "" }}>A1/48, Đường Số 5, Khu Dân Cư Nam Long, Phường Hưng Thạnh, Quận Cái Răng, Thành phố Cần Thơ</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                                <i className="fa fa-envelope"></i>
                                <h3 style={{ color: darkMode ? "#fff" : "" }}>Email Liên Hệ</h3>
                                <p style={{ color: darkMode ? "#fff" : "" }}>infor@gdvietnam.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                                <i className="fa fa-phone"></i>
                                <h3 style={{ color: darkMode ? "#fff" : "" }}>Điện Thoại Liên Hệ</h3>
                                <p style={{ color: darkMode ? "#fff" : "" }}>0799 552 667</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div {...motionVertical}>
                    <div className="row">
                        <div className="col-lg-6">
                            <iframe className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7857.977487688155!2d105.7815867943136!3d10.017787010354057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zxJDGsOG7nW5nIHPhu5EgNSwgSMawbmcgUGjDuiwgQ8OhaSBSxINuZywgQ-G6p24gVGjGoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1689566684310!5m2!1svi!2s"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                                style={{ border: 0, width: "100%", height: "384px" }} />
                        </div>
                        <div className="col-lg-6" style={{ backgroundColor: darkMode ? "#fff" : "", padding: '10px' }}>
                            <motion.div {...motionVertical}>
                                <form onSubmit={formik.handleSubmit} className="contact-form">
                                    <div className="row g-3">
                                        <div className="col-lg-6" >
                                            <TextField id="outlined-basic" label="Họ của bạn" variant="outlined"
                                                fullWidth
                                                inputProps={ariaLabel}
                                                size="small"
                                                name="firstname"
                                                value={formik.values.firstname}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                                helperText={formik.touched.firstname && formik.errors.firstname} />
                                        </div>
                                        <div className="col-lg-6">
                                            <TextField
                                                variant="outlined"
                                                fullWidth
                                                inputProps={ariaLabel}
                                                size="small"
                                                id="lastname"
                                                name="lastname"
                                                label="Tên của bạn"
                                                value={formik.values.lastname}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                                helperText={formik.touched.lastname && formik.errors.lastname} />
                                        </div>
                                        <div className="col-lg-6">
                                            <TextField
                                                variant="outlined"
                                                className="custom-label"
                                                fullWidth
                                                inputProps={ariaLabel}
                                                size="small"
                                                id="phone"
                                                name="phone"
                                                label="Số điện thoại"
                                                value={formik.values.phone}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                                helperText={formik.touched.phone && formik.errors.phone}
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <TextField
                                                variant="outlined"
                                                className="custom-label"
                                                fullWidth
                                                inputProps={ariaLabel}
                                                size="small"
                                                id="email"
                                                name="email"
                                                label="Email của bạn"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email} />
                                        </div>
                                        <div className="col-lg-12">
                                            <TextField
                                                fullWidth
                                                inputProps={ariaLabel}
                                                size="small"
                                                variant="outlined"
                                                className="custom-label"
                                                id="content"
                                                name="content"
                                                label="Nội dung"
                                                minRows={4}
                                                multiline
                                                value={formik.values.content}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched.content && Boolean(formik.errors.content)}
                                                helperText={formik.touched.content && formik.errors.content}
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <Button
                                                fullWidth
                                                sx={{ mt: 3, mb: 2 }}
                                                variant="contained" endIcon={<SendIcon />}
                                                style={{ backgroundColor: "#106eea", color: "#fff" }}
                                                type="submit"
                                                disabled={formik.isSubmitting}>
                                                Gửi
                                            </Button>
                                            <ToastContainer
                                                position="top-right"
                                                autoClose={5000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                                theme="light" />
                                            <ToastContainer />
                                        </div>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default Contact;
