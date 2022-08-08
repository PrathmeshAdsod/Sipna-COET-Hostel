import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <>
      <div className="banner">
        <div className="main_content">
          <h3 className="header">
            Imparting the best housing facilities <br />
            along with a homely stay for our girl students...
          </h3>
          <p className="header_content">
            Keeping all safety and security measures intact; we have built a
            Home away from Home making engineering a profound <br /> and a
            splendid learning experience.
            <br />
            Our hostels are well known for its extensive residential facilities.
            Students have the luxury of being located in Amravati,
            <br /> outside the bustle of the city, yet not far from the
            attractions of the city during weekends.
          </p>

          <div className="buttons">
            <a href="#component-hostels">
              <button>Hostels</button>
            </a>
            <a href="#component-rooms">
              <button>Rooms</button>
            </a>
            <a href="#component-mess">
              <button>Mess</button>
            </a>
            <a href="#component-facilities">
              <button>Facilities</button>
            </a>
          </div>
        </div>
        <div className="main_image">
          <img className="image" src="/girls1.jpg" alt="img" />
        </div>
      </div>
    </>
  );
}

export default Header;
