import { useState, useEffect } from 'react';
import '../App.css';
import '../index.css';
import './Contact'
import { Link } from "react-router-dom";

function Contact (){
    return(
        <div className = "Container" id = "who">
          <div className = "Top">
            <div>
              <Link to = "../pages/Contact" className='Link'><h1>Contact</h1></Link>
            </div>
            <div>
                <Link to= "/" className='Link'><h1>BuyBuyTech</h1></Link>
            </div>
            <div>
              <Link to = "../pages/Aboutus" className='Link'><h1>About Us</h1></Link>
            </div>
            </div>
            <div className = "Middle">
                <div className='MiddleAboutus'>
                    <h3>Contact Us Today @ Web.web</h3>
                </div>
            </div>
            <div className = "Footer">
              <div>
                Github Link
              </div>
            </div>
          </div>
    
      )
}

export default Contact;