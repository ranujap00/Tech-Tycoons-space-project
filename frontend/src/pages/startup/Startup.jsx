import { Link } from 'react-router-dom';
import './startup.css'

function Startup() {

  document.title = "Gemenide | Startup";

  return (
    <>
      <div className="Startup" id="Startup">

        <h1 className="heading">Gemenide</h1>

        <Link to="/welcome"><h6 className="linkText">Start Your Journey</h6></Link>
      </div>
    </>
  )
}

export default Startup;