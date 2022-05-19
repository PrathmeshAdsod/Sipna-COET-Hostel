import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
       <div className='navbar navbar-expand-lg navbar-light'>
           <div className='nav container-fluid'>
               <img className='sipna_logo' src='/logoSipna.png' alt='logo'/>

               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_content" >
                     <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" id='nav_content'>
                   <a href="tel:0721-2522341/42" className='phoneEmail'> 0721 - 2522341/42 (Office) </a>
                   <a href='mailto:office@sipnaengg.ac.in' className='phoneEmail'>office@sipnaengg.ac.in </a>
               </div>

           </div>
       </div>
    </>
  )
}

export default Navbar