const Event = () => {
  return (
    <div
      id="fh5co-event"
      className="fh5co-bg"
      style={{ backgroundImage: "url(images/img_bg_3.jpg)" }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <span>Our Special Events</span>
            <h2>Wedding Events</h2>
          </div>
        </div>
        <div className="row">
          <div className="display-t">
            <div className="display-tc">
              <div className="col-md-10 col-md-offset-1">
                <div className="col-md-6 col-sm-6 text-center">
                  <div className="event-wrap animate-box">
                    <h3>Lễ cưới(Nhà gái)</h3>
                    <div className="event-col">
                      <i className="icon-clock"></i>
                      <span>3:00 PM</span>
                      <span>4:30 PM</span>
                    </div>
                    <div className="event-col">
                      <i className="icon-calendar"></i>
                      <span>Thứ ba 19</span>
                      <span>Tháng 3, 2024</span>
                    </div>
                    <p>
                      Lễ cưới được tổ chức tại nhà gái địa chỉ Thị Trấn Cát
                      Thành, Trực Ninh, Nam Định
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 text-center">
                  <div className="event-wrap animate-box">
                    <h3>Lễ cưới(Nhà trai)</h3>
                    <div className="event-col">
                      <i className="icon-clock"></i>
                      <span>7:00 AM</span>
                      <span>8:30 AM</span>
                    </div>
                    <div className="event-col">
                      <i className="icon-calendar"></i>
                      <span>Thứ tư 20</span>
                      <span>Tháng 3, 2024</span>
                    </div>
                    <p>
                      Lễ cưới được tổ chức tại nhà gái địa chỉ xã Phùng Minh,
                      Ngọc Lặc, Thanh Hóa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
