import Image from "next/image";
import styles from "./page.module.css";
import Couple from "./couple/page";
import Event from "./event/page";
import Story from "./story/page";
import Gallery from "./gallery/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Couple />

      <Event />

      <Story />

      <Gallery />

      <div
        id="fh5co-counter"
        className="fh5co-bg fh5co-counter"
        style={{ backgroundImage: "url(images/img_bg_5.jpg) " }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="display-t">
              <div className="display-tc">
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className="icon-users"></i>
                    </span>

                    <span
                      className="counter js-counter"
                      data-from="0"
                      data-to="500"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      1
                    </span>
                    <span className="counter-label">Estimated Guest</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className="icon-user"></i>
                    </span>

                    <span
                      className="counter js-counter"
                      data-from="0"
                      data-to="1000"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      1
                    </span>
                    <span className="counter-label">We Catter</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className="icon-calendar"></i>
                    </span>
                    <span
                      className="counter js-counter"
                      data-from="0"
                      data-to="402"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      1
                    </span>
                    <span className="counter-label">Events Done</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className="icon-clock"></i>
                    </span>

                    <span
                      className="counter js-counter"
                      data-from="0"
                      data-to="2345"
                      data-speed="5000"
                      data-refresh-interval="50"
                    >
                      1
                    </span>
                    <span className="counter-label">Hours Spent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="fh5co-started"
        className="fh5co-bg"
        style={{ backgroundImage: "url(images/img_bg_4.jpg) " }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Are You Attending?</h2>
              <p>
                Please Fill-up the form to notify you that you're attending.
                Thanks.
              </p>
            </div>
          </div>
          <div className="row animate-box">
            <div className="col-md-10 col-md-offset-1">
              <form className="form-inline">
                <div className="col-md-4 col-sm-4">
                  <div className="form-group">
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <button type="submit" className="btn btn-default btn-block">
                    I am Attending
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
