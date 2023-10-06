import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img1 from './assets/images/pattern-divider-desktop.svg'
import img2 from './assets/images/pattern-divider-mobile.svg'
import img3 from './assets/images/icon-dice.svg'
import FetchAdvice from './FetchAdvice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchAdvice/>
        <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. 
      Coded by  <a href="https://github.com/01kingdahvid/"> King Dahvid</a>
      </div>
    </>
  )
}

export default App
