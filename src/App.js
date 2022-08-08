import "./App.css";
import Header from "./Header";
import Hostels from "./Hostels";
import Navbar from "./Navbar";
import Components from "./Components";
import Footer from "./Footer";
import Facilities from "./Facilities";

function App() {
  const roomsContent =
    "We provide cozy sharing accommodation with twin/three beds in every room with air conditioner (AC), study table, cupboard, mirror, chair, etc Our hostels are well known for its extensive residential facilities. Students have the luxury of being located in Amravati , outside the bustle of the city, yet not far from the attractions of the city during weekends";

  const messContent =
    "The hostel premises comprises of a separate dining facility for resident students. The hostel mess has a separate dining hall and a well-equipped kitchen catering with clean and hygienic environment. The food served is of high quality and meets the nutritional quality standards. Special emphasis is laid to provide a well-balanced, nutritious diet with varying food tastes. The meals served in the cafeteria are breakfast with tea, lunch and dinner every day. The weekly menu of the meals is available with the mess in-charge. The best quality vegetarian food is being served and self-service system is promoted during the meal hours.";

  return (
    <>
      <Navbar />
      <Header />
      <Hostels />
      <Components
        content={roomsContent}
        imgsrc1="./hostelRoom1.jpg"
        imgsrc2="./rooms.jpg"
        imgsrc3="./AhilyabaiHolkar2.jpg"
        imgsrc4="./facility5.jpg"
        id="component-rooms"
        heading="Rooms"
      />
      <Components
        imgsrc1="./mess3.jpg"
        imgsrc2="./mess.jpg"
        imgsrc3="./mess2.jpg"
        imgsrc4="./facility1.jpg"
        content={messContent}
        id="component-mess"
        heading="Mess"
      />

      <Facilities
        imgsrc1="./ambulance.jpg"
        imgsrc2="./medical.jpg"
        imgsrc3="./gym.jpg"
        imgsrc4="./facility1.jpg"
      />
      <Footer />
    </>
  );
}

export default App;
