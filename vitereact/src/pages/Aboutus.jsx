import { useState, useEffect } from 'react';
import '../App.css';
import '../index.css';
import './Contact'
import { Link } from "react-router-dom";

function Aboutus() {

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
                        <h3>v yi yugvyu hukvuo yugvyuo ygu o yug oi yug b uvk
                             kyuk yuk yu uyk yukg yukgukgku yukg
                             dwada dwasda dwads dwadwas dwad sadwa
                             dwasadw dwasadw dwas dwadasa dwasdwad dwasdad
                             dwasdw dawdaw </h3>
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

export default Aboutus;