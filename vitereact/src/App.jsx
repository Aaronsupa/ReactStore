import { useState } from 'react'
import './App.css'

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
        id: 1,
        Name: "Keyboard"
      },
      {
        id: 2,
        Name: "Mouse"
      },
      {
        id: 1,
        Name: "Charger"
      },
      {
        id: 2,
        Name: "Headphones"
      },
      {
        id: 1,
        Name: "Extention Cord"
      },
      {
        id: 2,
        Name: "Camera"
      },
    ]
  )

  return (
    <div className = "Container">
      <div className = "Top">
        <div>
          <h1>Contact</h1>
        </div>
        <div>
          <h1>BuyBuyTech</h1>
        </div>
        <div>
          <h1>About Us</h1>
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
