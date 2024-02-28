"use client";
import { motion } from "framer-motion";
import { AppVariantsX, AppVariantsY } from "../common/variant";

const Gallery = () => {
    return (
        <div id='fh5co-gallery' className='fh5co-section-gray'>
            <div className='container'>
                <div className='row'>
                    <motion.div
                        className='col-md-8 col-md-offset-2 text-center fh5co-heading animate-box'
                        initial='hide'
                        whileInView='show'
                        variants={AppVariantsY(100, 1)}
                    >
                        <span>Our Memories</span>
                        <h2>Wedding Gallery</h2>
                        <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                        </p>
                    </motion.div>
                </div>
                <div className='row row-bottom-padded-md'>
                    <div className='col-md-12'>
                        <ul id='fh5co-gallery-list'>
                            <motion.li
                                className='one-third animate-box'
                                style={{
                                    backgroundImage:
                                        "url(images/gallery-1.jpg)",
                                }}
                                initial='hide'
                                whileInView='show'
                                variants={AppVariantsX(100, 1)}
                            >
                                <a href='images/gallery-1.jpg'>
                                    <div className='case-studies-summary'>
                                        <span>14 Photos</span>
                                        <h2>Two Glas of Juice</h2>
                                    </div>
                                </a>
                            </motion.li>

                            <motion.li
                                className='one-third animate-box'
                                data-animate-effect='fadeIn'
                                style={{
                                    backgroundImage:
                                        "url(images/gallery-2.jpg) ",
                                }}
                                initial='hide'
                                whileInView='show'
                                variants={AppVariantsX(100, 1)}
                            >
                                <a href='#' className='color-2'>
                                    <div className='case-studies-summary'>
                                        <span>30 Photos</span>
                                        <h2>Timer starts now!</h2>
                                    </div>
                                </a>
                            </motion.li>

                            <motion.li
                                className='one-third animate-box'
                                style={{
                                    backgroundImage:
                                        "url(images/gallery-3.jpg) ",
                                }}
                                initial='hide'
                                whileInView='show'
                                variants={AppVariantsX(100, 1)}
                            >
                                <a href='#' className='color-3'>
                                    <div className='case-studies-summary'>
                                        <span>90 Photos</span>
                                        <h2>Beautiful sunset</h2>
                                    </div>
                                </a>
                            </motion.li>
                            <motion.li
                                className='one-third animate-box'
                                style={{
                                    backgroundImage:
                                        "url(images/gallery-4.jpg) ",
                                }}
                                initial='hide'
                                whileInView='show'
                                variants={AppVariantsX(-100, 1)}
                            >
                                <a href='#' className='color-4'>
                                    <div className='case-studies-summary'>
                                        <span>12 Photos</span>
                                        <h2>Company&apos;s Conference Room</h2>
                                    </div>
                                </a>
                            </motion.li>

                            <motion.li
                                className='one-third animate-box'
                                style={{
                                    backgroundImage:
                                        "url(images/gallery-5.jpg) ",
                                }}
                                initial='hide'
                                whileInView='show'
                                variants={AppVariantsX(-100, 1)}
                            >
                                <a href='#' className='color-3'>
                                    <div className='case-studies-summary'>
                                        <span>50 Photos</span>
                                        <h2>Useful baskets</h2>
                                    </div>
                                </a>
                            </motion.li>
                            <motion.li
                                className='one-third animate-box'
                                style={{
                                    backgroundImage:
                                        "url(images/gallery-6.jpg) ",
                                }}
                                initial='hide'
                                whileInView='show'
                                variants={AppVariantsX(-100, 1)}
                            >
                                <a href='#' className='color-4'>
                                    <div className='case-studies-summary'>
                                        <span>45 Photos</span>
                                        <h2>Skater man in the road</h2>
                                    </div>
                                </a>
                            </motion.li>

                            <motion.li
                                className='one-third animate-box'
                                style={{
                                    backgroundImage:
                                        "url(images/gallery-7.jpg) ",
                                }}
                                initial='hide'
                                whileInView='show'
                                variants={AppVariantsX(100, 1)}
                            >
                                <a href='#' className='color-4'>
                                    <div className='case-studies-summary'>
                                        <span>35 Photos</span>
                                        <h2>Two Glas of Juice</h2>
                                    </div>
                                </a>
                            </motion.li>

                            <motion.li
                                className='one-third animate-box'
                                style={{
                                    backgroundImage:
                                        "url(images/gallery-8.jpg) ",
                                }}
                                initial='hide'
                                whileInView='show'
                                variants={AppVariantsX(100, 1)}
                            >
                                <a href='#' className='color-5'>
                                    <div className='case-studies-summary'>
                                        <span>90 Photos</span>
                                        <h2>Timer starts now!</h2>
                                    </div>
                                </a>
                            </motion.li>
                            <motion.li
                                className='one-third animate-box'
                                style={{
                                    backgroundImage:
                                        "url(images/gallery-9.jpg) ",
                                }}
                                initial='hide'
                                whileInView='show'
                                variants={AppVariantsX(100, 1)}
                            >
                                <a href='#' className='color-6'>
                                    <div className='case-studies-summary'>
                                        <span>56 Photos</span>
                                        <h2>Beautiful sunset</h2>
                                    </div>
                                </a>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
