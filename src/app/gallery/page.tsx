"use client";
import { Variants, motion } from "framer-motion";

const Gallery = () => {
  const introHeaderVariants: Variants = {
    hide: {
      opacity: 0,
      x: -500,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <div id="fh5co-gallery" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <span>Our Memories</span>
            <h2>Wedding Gallery</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="row row-bottom-padded-md">
          <div className="col-md-12">
            <ul id="fh5co-gallery-list">
              <motion.li
                className="one-third animate-box"
                style={{
                  backgroundImage: "url(images/gallery-1.jpg)",
                }}
                initial="hide"
                whileInView="show"
                variants={introHeaderVariants}
              >
                <a href="images/gallery-1.jpg">
                  <div className="case-studies-summary">
                    <span>14 Photos</span>
                    <h2>Two Glas of Juice</h2>
                  </div>
                </a>
              </motion.li>
              {/* <li
                className="one-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  backgroundImage: "url(images/gallery-1.jpg)",
                }}
              >
                <a href="images/gallery-1.jpg">
                  <div className="case-studies-summary">
                    <span>14 Photos</span>
                    <h2>Two Glas of Juice</h2>
                  </div>
                </a>
              </li> */}
              <li
                className="one-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  backgroundImage: "url(images/gallery-2.jpg) ",
                }}
              >
                <a href="#" className="color-2">
                  <div className="case-studies-summary">
                    <span>30 Photos</span>
                    <h2>Timer starts now!</h2>
                  </div>
                </a>
              </li>

              <li
                className="one-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  backgroundImage: "url(images/gallery-3.jpg) ",
                }}
              >
                <a href="#" className="color-3">
                  <div className="case-studies-summary">
                    <span>90 Photos</span>
                    <h2>Beautiful sunset</h2>
                  </div>
                </a>
              </li>
              <li
                className="one-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  backgroundImage: "url(images/gallery-4.jpg) ",
                }}
              >
                <a href="#" className="color-4">
                  <div className="case-studies-summary">
                    <span>12 Photos</span>
                    <h2>Company&apos;s Conference Room</h2>
                  </div>
                </a>
              </li>

              <li
                className="one-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  backgroundImage: "url(images/gallery-5.jpg) ",
                }}
              >
                <a href="#" className="color-3">
                  <div className="case-studies-summary">
                    <span>50 Photos</span>
                    <h2>Useful baskets</h2>
                  </div>
                </a>
              </li>
              <li
                className="one-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  backgroundImage: "url(images/gallery-6.jpg) ",
                }}
              >
                <a href="#" className="color-4">
                  <div className="case-studies-summary">
                    <span>45 Photos</span>
                    <h2>Skater man in the road</h2>
                  </div>
                </a>
              </li>

              <li
                className="one-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  backgroundImage: "url(images/gallery-7.jpg) ",
                }}
              >
                <a href="#" className="color-4">
                  <div className="case-studies-summary">
                    <span>35 Photos</span>
                    <h2>Two Glas of Juice</h2>
                  </div>
                </a>
              </li>

              <li
                className="one-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  backgroundImage: "url(images/gallery-8.jpg) ",
                }}
              >
                <a href="#" className="color-5">
                  <div className="case-studies-summary">
                    <span>90 Photos</span>
                    <h2>Timer starts now!</h2>
                  </div>
                </a>
              </li>
              <li
                className="one-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  backgroundImage: "url(images/gallery-9.jpg) ",
                }}
              >
                <a href="#" className="color-6">
                  <div className="case-studies-summary">
                    <span>56 Photos</span>
                    <h2>Beautiful sunset</h2>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
