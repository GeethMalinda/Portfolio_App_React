import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
       <div className="n-warapper">
           <div className="n-left">
               <div className="n-name">Geeth</div>
               <span>toggle</span>
           </div>
           <div className="n-right">
               <div className="n-list">
                   <ul style={{listStyleType:'none'}}>
                       <li>Home</li>
                       <li>Service</li>
                       <li>Experience</li>
                       <li>Portfolio</li>
                       <li>Testamonials</li>
                   </ul>
               </div>
               <button className="button n-button">
                   Contact us
               </button>
           </div>
       </div>
    );
};

export default Navbar;
