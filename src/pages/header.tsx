"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const AppHeader = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [inputDate] = useState("2024-03-20 07:00:00");
    const [currentDate] = useState(inputDate);

    useEffect(() => {
        const interval = setInterval(() => {
            const changingDate: any = new Date(inputDate);
            const currentDate: any = new Date();
            const totalSeconds = (changingDate - currentDate) / 1000;

            setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
            setHours(Math.floor(totalSeconds / 3600) % 24);
            setMinutes(Math.floor(totalSeconds / 60) % 60);
            setSeconds(Math.floor(totalSeconds % 60));
        }, 1000);

        return () => clearInterval(interval);
    }, [currentDate]);

    function formatTime(time: any) {
        return time < 10 ? `0${time}` : time;
    }

    return (
        <>
            <nav className='fh5co-nav' role='navigation'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2'>
                            <div id='fh5co-logo'>
                                <Link href='/'>
                                    Wedding<strong>.</strong>
                                </Link>
                            </div>
                        </div>
                        <div className='col-10 text-right menu-1'>
                            <ul className='float-right'>
                                <li className='active'>
                                    <a href='/'>Home</a>
                                </li>
                                <li>
                                    <Link href='story'>Story</Link>
                                </li>
                                <li>
                                    <a href='contact.html'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <header
                id='fh5co-header'
                className='fh5co-cover'
                role='banner'
                style={{ backgroundImage: "url(images/img_bg_2.jpg)" }}
                data-stellar-background-ratio='0.5'
            >
                <div className='overlay'></div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-10 col-md-offset-2 text-center'>
                            <div className='display-t'>
                                <div
                                    className='display-tc animate-box'
                                    data-animate-effect='fadeIn'
                                >
                                    <h1>Vĩnh Hảo &amp; Mai Lan</h1>
                                    <h2>Đám cưới sẽ được tổ chức</h2>
                                    <div className='simply-countdown simply-countdown-one'>
                                        <div className='simply-section simply-days-section'>
                                            <div>
                                                <span className='simply-amount'>
                                                    {days}
                                                </span>
                                                <span className='simply-word'>
                                                    ngày
                                                </span>
                                            </div>
                                        </div>
                                        <div className='simply-section simply-hours-section'>
                                            <div>
                                                <span className='simply-amount'>
                                                    {hours}
                                                </span>
                                                <span className='simply-word'>
                                                    giờ
                                                </span>
                                            </div>
                                        </div>
                                        <div className='simply-section simply-minutes-section'>
                                            <div>
                                                <span className='simply-amount'>
                                                    {minutes}
                                                </span>
                                                <span className='simply-word'>
                                                    phút
                                                </span>
                                            </div>
                                        </div>
                                        <div className='simply-section simply-seconds-section'>
                                            <div>
                                                <span className='simply-amount'>
                                                    {seconds}
                                                </span>
                                                <span className='simply-word'>
                                                    giây
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="simply-countdown simply-countdown-one">

                                    </div> */}
                                    <p>
                                        <a
                                            href='#'
                                            className='btn btn-default btn-sm'
                                        >
                                            Lưu thời gian
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default AppHeader;
