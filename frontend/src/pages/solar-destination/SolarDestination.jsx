import "./solarDestination.css";
import { useRef } from "react";
import { scaleValue } from "./utils/scale";

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

  return (
    <>
      <div className="page">
        <nav ref={dockRef} className="dock">
          <ul>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/arc.png" />
                <span className="tooltip">Arc Browser</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/1password.png" />
                <span className="tooltip">1Password</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/calendar.png" />
                <span className="tooltip">Calendar</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/email.png" />
                <span className="tooltip">Mail (who uses this app?!)</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/signal.png" />
                <span className="tooltip">Signal</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/slack.png" />
                <span className="tooltip">Slack</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/spotify.png" />
                <span className="tooltip">Spotify</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/vscode.png" />
                <span className="tooltip">VsCode</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/warp.png" />
                <span className="tooltip">Warp</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/frontendfyi.png" />
                <span className="tooltip">Visit frontend.fyi</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/youtube.png" />
                <span className="tooltip">Watch this tutorial on YouTube</span>
              </a>
            </li>
          </ul>
        </nav>
        
      </div>
    </>
  );
}

export default SolarDestination;
