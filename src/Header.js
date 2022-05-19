import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
        <div className='banner'>
              <div className='main_content'>
                  <h3 className='header'>Imparting the best housing facilities <br/>along with a homely stay for our
                      girl students...
                  </h3>
                  <p className='header_content'>
                        Keeping all safety and security measures intact; we have built a Home
                        away from Home making engineering a profound <br/> and a splendid learning
                        experience.<br/>Our hostels are well known for its
                        extensive residential facilities. Students have the luxury of being located in
                        Amravati,<br/> outside the bustle of the city, yet not far from the attractions of the city
                        during weekends.
                  </p>
                  <div className='buttons'>
                       <button>About</button>
                       <button>Rooms</button>
                       <button>Cafeteria</button>
                       <button>Facilities</button>  
                  </div>
              </div>
              <div className='main_image'>
                  <img className='image' src='/raniLaxmibai.jpg' alt='img'/>
              </div>
        </div>
    </>
  )
}

export default Header