// import { Link } from 'react-router-dom';
import './welcome.css'

function Welcome() {
  return (
    <>
      <div className="welcomeContainer">
        <h3 className="welcomeText">
          Welcome to
        </h3>
        <h3 className="gemenideText">
          Gemenide
        </h3>
        <h3 className="discoverText">
          Discover your journey <br />with us
        </h3>

        <div className="welcomeButtonContainer">
          <a href="/login" className="welcomeButtonText">
            <button className="welcomeButton">
              Login
            </button>
          </a>
        </div>
        <div className="welcomeButtonContainer">
          <a href="/register" className="welcomeButtonText">
            <button className="welcomeButton">
              Register
            </button>
          </a>
        </div>


      </div >
    </>
  )
}

export default Welcome;