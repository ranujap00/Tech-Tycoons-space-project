import "./solarDestination.css";
import { useRef } from "react";
import { scaleValue } from "./utils/scale";
import { useNavigate } from "react-router-dom";
import SunImage from "../../assets/img/sun.png";
import Mercury from "../../assets/img/mercury.png";
import Venus from "../../assets/img/venus.png";
import Earth from "../../assets/img/earth.png";
import OSH from "../../assets/img/osh.png";
import Mars from "../../assets/img/mars.png";
import Jupiter from "../../assets/img/Jupiter.png";
import Saturn from "../../assets/img/saturn.png";
import Uranus from "../../assets/img/Uranus.png";
import Neptune from "../../assets/img/neptune.png";
import Pluto from "../../assets/img/pluto.png";
import "./SolarDestination.css";

function SolarDestination() {
  const dockRef = useRef(null);

  const handleAppHover = (ev) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    );

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`
    );

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`
    );
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <nav ref={dockRef} className="dock">
          <ul className="dock-list">
            <li className="app" id="sun" onMouseMove={handleAppHover}>
              <a onClick={() =>{
                navigate('/detailed-information/sun');
              }}>
                <img src={SunImage} />
                <span className="tooltip">Sun</span>
              </a>
            </li>
            <li className="app" id="mercury" onMouseMove={handleAppHover}>
              <a onClick={() =>{
                navigate('/detailed-information/mercury');
              }}>
              <img src={Mercury} />
                <span className="tooltip">Mercury</span>
              </a>
            </li>
            <li className="app" id="venus" onMouseMove={handleAppHover}>
              <a onClick={() =>{
                navigate('/detailed-information/venus');
              }}>
              <img src={Venus} />
                <span className="tooltip">Venus</span>
              </a>
            </li>
            <li className="app" id="earth" onMouseMove={handleAppHover}>
              <a onClick={() =>{
                navigate('/detailed-information/earth');
              }}>
              <img src={Earth} />
                <span className="tooltip">Earth</span>
              </a>
            </li>
            <li className="app" id="osh" onMouseMove={handleAppHover}>
              <a onClick={() =>{
                navigate('/detailed-information/orion space hotel');
              }}>
              <img src={OSH} />
                <span className="tooltip">Orion Space Hotel</span>
              </a>
            </li>
            <li className="app" id="mars" onMouseMove={handleAppHover}>
              <a onClick={() =>{
                navigate('/detailed-information/mars');
              }}>
              <img src={Mars} />
                <span className="tooltip">Mars</span>
              </a>
            </li>
            <li className="app" id="jupiter" onMouseMove={handleAppHover}>
              <a onClick={() =>{
                navigate('/detailed-information/jupiter');
              }}>
              <img src={Jupiter} />
                <span className="tooltip">Jupiter</span>
              </a>
            </li>
            <li className="app" id="saturn" onMouseMove={handleAppHover}>
              <a onClick={() =>{
                navigate('/detailed-information/saturn');
              }}>
              <img src={Saturn} />
                <span className="tooltip">Saturn</span>
              </a>
            </li>
            <li className="app" id="uranus" onMouseMove={handleAppHover}>
              <a onClick={() =>{
                navigate('/detailed-information/uranus');
              }}>
              <img src={Uranus} />
                <span className="tooltip">Uranus</span>
              </a>
            </li>
            <li className="app" id="neptune" onMouseMove={handleAppHover}>
              <a onClick={() =>{
                navigate('/detailed-information/neptune');
              }}>
              <img src={Neptune} />
                <span className="tooltip">Neptune</span>
              </a>
            </li>
            <li className="app" id="pluto" onMouseMove={handleAppHover}>
              <a onClick={() =>{
                navigate('/detailed-information/pluto');
              }}>
              <img src={Pluto} />
                <span className="tooltip">Pluto</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SolarDestination;
