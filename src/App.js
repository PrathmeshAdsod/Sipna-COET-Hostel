import "./App.css";
import Header from "./Header";
import Hostels from "./Hostels";
import Navbar from "./Navbar";
import Components from "./Components";
import Footer from "./Footer";

function App() {
  const roomsContent =
    "We provide cozy sharing accommodation with twin/three beds in every room with air conditioner (AC), study table, cupboard, mirror, chair, etc";

  const messContent =
    "The hostel premises comprises of a separate dining facility for resident students. The hostel mess has a separate dining hall and a well-equipped kitchen catering with clean and hygienic environment. The food served is of high quality and meets the nutritional quality standards. Special emphasis is laid to provide a well-balanced, nutritious diet with varying food tastes. The meals served in the cafeteria are breakfast with tea, lunch and dinner every day. The weekly menu of the meals is available with the mess in-charge. The best quality vegetarian food is being served and self-service system is promoted during the meal hours.";

  return (
    <>
      <Navbar />
      <Header />
      <Hostels />
      <Components
        imgsrc1="./AhilyabaiHolkar2.jpg"
        imgsrc2="./rooms.jpg"
        imgsrc3="./facility5.jpg"
        imgsrc4="./hostelRoom1.jpg"
        content={roomsContent}
        id="component-rooms"
        heading="Rooms"
      />
      <Components
        imgsrc1="./mess.jpg"
        imgsrc2="./mess3.jpg"
        imgsrc3="./mess2.jpg"
        imgsrc4="./facility1.jpg"
        content={messContent}
        id="component-mess"
        heading="Mess"
      />

      <Footer />
    </>
  );
}

export default App;
