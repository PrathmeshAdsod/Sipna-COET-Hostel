import React from "react";
import "./Facilities.css";
import Card from "react-bootstrap/Card";
import Carousal from "./Carousal";

function Facilities(props) {
  return (
    <>
      <h3 id="component-facilities" className="facility-header">
        Facilities
      </h3>

      <Card body className="facility-card">
        <p>
          For pure drinking water, water cooler with aqua guard is installed on
          the ground floor and second floor.
        </p>
        <p>
          Wi-Fi 24X7 connection is made available, so that the students can
          access internet.
        </p>
        <p>
          A visiting Doctor is appointed for regular medical checkup of
          students, who visits twice a week.
        </p>
        <p>Fire Extinguisher is also available on each floor.</p>
        <p>
          Bathrooms and toilets are available on every floor with 24 hours water
          supply. Warm water for bathing is also made available.
        </p>
        <p>
          The Superintendent resides in the hostel and monitors the students
          activities.
        </p>
        <p>24 X 7 security guards are available for the student’s security.</p>
        <p>
          The wash basins and washrooms are cleaned daily by a lady cleaner.
        </p>
        <p>
          Every room in the hostel is swept and mopped twice a day by a lady
          sweeper.
        </p>
        <p>Geyser, vending and incinerator machines are also installed.</p>
        <p>
          For any emergency an ambulance is available with all the necessary
          medical equipment.
        </p>
      </Card>
      <div className="facility-carousel">
        <Carousal
          imgsrc1={props.imgsrc1}
          imgsrc2={props.imgsrc2}
          imgsrc3={props.imgsrc3}
          imgsrc4={props.imgsrc4}
        />
      </div>
    </>
  );
}

export default Facilities;
