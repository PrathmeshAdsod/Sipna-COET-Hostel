import React, { useState } from "react";
import "./Hostels.css";

const Hostels = () => {
  const [hostel, setHostel] = useState({
    hostel1: true,
    hostel2: true,
    hostel3: true,
    hostel4: true,
  });

  return (
    <>
      <div className="hostels_block container">
        <div>
          <h3 id="component-hostels" className="heading">
            We have Four Girl's Hostel
          </h3>
        </div>

        <div className="images_block container" data-aos="fade-out">
          <div>
            {hostel.hostel1 ? (
              <img
                className="hostel_image laxmibai"
                src="/raniLaxmibai.jpg"
                alt="hostel"
              />
            ) : (
              <div className="extra-hostel-info">
                <h5>Incharge</h5>
                <h6>Ms.A.B Parandekar</h6>
                <h5>Worker</h5>
                <h6>Ms.S.R Lawankar</h6>
              </div>
            )}
            <h4 className="hostel_name">
              Rani Laxmibai <br /> Girls Hostel
            </h4>
            <button
              onClick={() =>
                setHostel({
                  hostel1: !hostel.hostel1,
                  hostel2: true,
                  hostel3: true,
                  hostel4: true,
                })
              }
              className="more_btn"
            >
              about
            </button>
          </div>

          <div>
            {hostel.hostel2 ? (
              <img
                className="hostel_image ahilyabai"
                src="/AhilyabaiHolkar.jpg"
                alt="hostel"
              />
            ) : (
              <div className="extra-hostel-info">
                <h5>Incharge</h5>
                <h6>Dr.N.D Sahu</h6>
                <h5>Worker</h5>
                <h6>Ms.J.S Bhagawat</h6>
              </div>
            )}
            <h4 className="hostel_name">
              Punyshlok Ahilyabai Girls <br />
              Hostel
            </h4>
            <button
              onClick={() =>
                setHostel({
                  hostel1: true,
                  hostel2: !hostel.hostel2,
                  hostel3: true,
                  hostel4: true,
                })
              }
              className="more_btn"
            >
              about
            </button>
          </div>

          <div>
            {hostel.hostel3 ? (
              <img
                className="hostel_image savitribai"
                src="/SavitribaiPhule.jpg"
                alt="hostel"
              />
            ) : (
              <div className="extra-hostel-info">
                <h5>Incharge</h5>
                <h6>Ms.P.C Khanzode</h6>
                <h5>Worker</h5>
                <h6>Ms.J.S Dudhkawale</h6>
              </div>
            )}
            <h4 className="hostel_name">
              Krantijoti Savitribai Phule <br /> Girls Hostel
            </h4>
            <button
              onClick={() =>
                setHostel({
                  hostel1: true,
                  hostel2: true,
                  hostel3: !hostel.hostel3,
                  hostel4: true,
                })
              }
              className="more_btn"
            >
              about
            </button>
          </div>

          <div>
            {hostel.hostel4 ? (
              <img
                className="hostel_image hostel-D"
                src="/campus.jpg"
                alt="hostel"
              />
            ) : (
              <div className="extra-hostel-info">
                <h5>Incharge</h5>
                <h6>Dr.S.M Seikdar</h6>
                <h5>Worker</h5>
                <h6>Ms.R.V Tanpure</h6>
              </div>
            )}
            <h4 className="hostel_name">
              Rajmata Jijabai <br />
              Girls Hostel
            </h4>
            <button
              onClick={() =>
                setHostel({
                  hostel1: true,
                  hostel2: true,
                  hostel3: true,
                  hostel4: !hostel.hostel4,
                })
              }
              className="more_btn"
            >
              about
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hostels;
