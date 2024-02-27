import Image from "next/image";
const Couple = () => {
  return (
    <>
      <div id="fh5co-couple">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2>Thân mời!</h2>
              <h3>Ngày 20 tháng 03 năm 2024</h3>
              <h4 style={{ fontStyle: "italic" }}>
                (Tức ngày 11 tháng 2 năm Giáp Thìn)
              </h4>
              <p>Hân hạnh được tiếp đón</p>
            </div>
          </div>
          <div className="couple-wrap animate-box">
            <div className="couple-half">
              <div className="groom">
                <Image
                  width={100}
                  height={100}
                  src="/images/groom.jpg"
                  alt="groom"
                  className="img-responsive"
                />
              </div>
              <div className="desc-groom">
                <h3>Vĩnh Hảo</h3>
                <p></p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="couple-half">
              <div className="bride">
                <Image
                  width={100}
                  height={100}
                  src="/images/bride.jpg"
                  alt="groom"
                  className="img-responsive"
                />
              </div>
              <div className="desc-bride">
                <h3>Mai Lan</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Couple;
