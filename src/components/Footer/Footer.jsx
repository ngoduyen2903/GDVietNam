import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import MainLogo from '../../img/logo.png'


const Footer = () => {
    const ariaLabel = { 'aria-label': 'description' };
    const validationSchema = Yup.object({
        email: Yup.string().email('Email không đúng định dạng!').required('Email không được trống!')
    });
    const handleSubmit = (values, { resetForm }) => {
        setTimeout(() => {
            showToastMessage();
            resetForm();
        }, 1000);
    };
    const formik = useFormik({
        initialValues: {
            email: '',
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
    return (
        <footer id="footer">
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h4 className="mt-2">Nhận tin tức mới nhất</h4>
                            <p>Cung cấp email của bạn để cập nhật những thông tin mới nhất từ chúng tôi</p>
                            <div className="col-lg-12">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-9">
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
                                        <div className="col-md-3">
                                            <Button
                                                fullWidth
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 footer-contact">
                            <Link to="introduce"><img src={MainLogo} alt="logo" height={'60px'} className="mb-2" /></Link>
                            <p>
                                Công ty Cổ phần Giải pháp Công nghệ GD Việt Nam đi đầu trong lĩnh vực số hóa, chuyển đổi số. Chúng tôi chuyên cung cấp giải pháp và các phần mềm theo yêu cầu. Với đội ngũ kĩ thuật chuyên môn cao từ khâu thiết kế đến tư vấn, nghiên cứu, phân tích và tạo ra các sản phẩm tối ưu nhất.
                                <br /><br /><strong>Số điện thoại:</strong> <i>0799 552 667</i><br />
                                <strong>Email:</strong> <i>info@gdvietnam.com</i><br />
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-links">

                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Mạng xã hội</h4>
                            <div className="social-links mt-1">
                                <a href="#" className="twitter"><FaFacebookF /></a>
                                <a href="#" className="facebook"><TfiYoutube /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="copyright">
                    Copyright &copy;2023<strong><span> GD Việt Nam</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
