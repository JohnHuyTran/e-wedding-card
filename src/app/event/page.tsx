"use client";
import { motion } from "framer-motion";
import { AppVariantsY } from "../common/variant";
const Event = () => {
    return (
        <div
            id='fh5co-event'
            className='fh5co-bg'
            style={{ backgroundImage: "url(images/img_bg_3.jpg)" }}
        >
            <div className='overlay'></div>
            <div className='container'>
                <div className='row'>
                    <motion.div
                        className='col-md-offset-2 text-center fh5co-heading animate-box'
                        initial='hide'
                        whileInView='show'
                        variants={AppVariantsY(-100, 1)}
                    >
                        <span>Our Special Events</span>
                        <h2>Wedding Events</h2>
                    </motion.div>
                </div>
                <div className='row d-flex'>
                    <div className='display-t'>
                        <div className='display-tc'>
                            <div className='col-10 col-md-offset-1 row'>
                                <motion.div
                                    className='col-lg-6 text-center'
                                    initial='hide'
                                    whileInView='show'
                                    variants={AppVariantsY(100, 1)}
                                >
                                    <div className='event-wrap animate-box'>
                                        <h3>Lễ cưới(Nhà gái)</h3>
                                        <div className='event-col'>
                                            <i className='icon-clock'></i>
                                            <span>3:00 PM</span>
                                            <span>4:30 PM</span>
                                        </div>
                                        <div className='event-col'>
                                            <i className='icon-calendar'></i>
                                            <span>Thứ ba 19</span>
                                            <span>Tháng 3, 2024</span>
                                        </div>
                                        <p>
                                            Lễ cưới được tổ chức tại nhà gái địa
                                            chỉ Thị Trấn Cát Thành, Trực Ninh,
                                            Nam Định
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className='col-lg-6 text-center'
                                    initial='hide'
                                    whileInView='show'
                                    variants={AppVariantsY(200, 1)}
                                >
                                    <div className='event-wrap animate-box'>
                                        <h3>Lễ cưới(Nhà trai)</h3>
                                        <div className='event-col'>
                                            <i className='icon-clock'></i>
                                            <span>7:00 AM</span>
                                            <span>8:30 AM</span>
                                        </div>
                                        <div className='event-col'>
                                            <i className='icon-calendar'></i>
                                            <span>Thứ tư 20</span>
                                            <span>Tháng 3, 2024</span>
                                        </div>
                                        <p>
                                            Lễ cưới được tổ chức tại nhà gái địa
                                            chỉ xã Phùng Minh, Ngọc Lặc, Thanh
                                            Hóa
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
