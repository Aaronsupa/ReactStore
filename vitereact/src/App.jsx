import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import './pages/Aboutus';
import './pages/Contact';
import { Link } from "react-router-dom";

function App() {
  const [Tech, setTech] = useState(
    [
      {
        id: 1,
        Name: "Computer"
      },
      {
        id: 2,
        Name: "Laptop"
      },
      {
        id: 3,
        Name: "Keyboard"
      },
      {
        id: 4,
        Name: "Mouse"
      },
      {
        id: 5,
        Name: "Charger"
      },
      {
        id: 6,
        Name: "Headphones"
      },
      {
        id: 7,
        Name: "Extention Cord"
      },
      {
        id: 8,
        Name: "Camera"
      },
    ]
  )


  return (
    <div className = "Container" id = "who">
      <div className = "Top">
        <div>
          <Link to = "./pages/Contact" className='Link'><h1>Contact</h1></Link>
        </div>
        <div>
          <h1>BuyBuyTech</h1>
        </div>
        <div>
          <Link to = "./pages/Aboutus" className='Link'><h1>About Us</h1></Link>
        </div>
        </div>
        <div className = "Middle">
          <div className = "Products">
              <ul>
                {Tech.map((t) => 
                  <div key = {t.id}>
                    <div className = "Prodtop">
                    </div>
                    <div className = "Prodbottom">
                      <h3>
                        {t.Name}
                      </h3>
                    </div>
                  </div>
                )}
              </ul>
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

export default App
