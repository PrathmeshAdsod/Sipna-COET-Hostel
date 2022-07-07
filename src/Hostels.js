import React from "react";
import "./Hostels.css";

const Hostels = () => {
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
            <img
              className="hostel_image laxmibai"
              src="/raniLaxmibai.jpg"
              alt="hostel"
            />
            <h4 className="hostel_name">Rani Laxmibai</h4>
          </div>

          <div>
            <img
              className="hostel_image ahilyabai"
              src="/AhilyabaiHolkar.jpg"
              alt="hostel"
            />
            <h4 className="hostel_name">Ahilyabai Holkar</h4>
          </div>

          <div>
            <img
              className="hostel_image savitribai"
              src="/SavitribaiPhule.jpg"
              alt="hostel"
            />
            <h4 className="hostel_name">Savitribai Phule</h4>
          </div>

          <div>
            <img
              className="hostel_image hostel-D"
              src="/campus.jpg"
              alt="hostel"
            />
            <h4 className="hostel_name">Hostel D</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hostels;
