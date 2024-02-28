"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AppVariantsX, AppVariantsY } from "../common/variant";
const Couple = () => {
    return (
        <>
            <div id='fh5co-couple'>
                <div className='container card' style={{ border: "none" }}>
                    <div className='col-12'>
                        <motion.div
                            className='fh5co-heading animate-box text-center'
                            initial='hide'
                            whileInView='show'
                            variants={AppVariantsY(-100, 1)}
                        >
                            <h2>Thân mời!</h2>
                            <h3>Ngày 20 tháng 03 năm 2024</h3>
                            <h4 style={{ fontStyle: "italic" }}>
                                (Tức ngày 11 tháng 2 năm Giáp Thìn)
                            </h4>
                            <p>Hân hạnh được tiếp đón</p>
                        </motion.div>
                    </div>
                    <div className='couple-wrap animate-box'>
                        <motion.div
                            className='couple-half'
                            initial='hide'
                            whileInView='show'
                            variants={AppVariantsX(-100, 1)}
                        >
                            <div className='groom'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/groom.jpg'
                                    alt='groom'
                                    className='img-responsive'
                                />
                            </div>
                            <div className='desc-groom'>
                                <h3>Vĩnh Hảo</h3>
                                <p></p>
                            </div>
                        </motion.div>
                        <p className='heart text-center'>
                            <i className='icon-heart2'></i>
                        </p>
                        <motion.div
                            className='couple-half'
                            initial='hide'
                            whileInView='show'
                            variants={AppVariantsX(100, 1)}
                        >
                            <div className='bride'>
                                <Image
                                    width={100}
                                    height={100}
                                    src='/images/bride.jpg'
                                    alt='groom'
                                    className='img-responsive'
                                />
                            </div>
                            <div className='desc-bride'>
                                <h3>Mai Lan</h3>
                                <p></p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Couple;
