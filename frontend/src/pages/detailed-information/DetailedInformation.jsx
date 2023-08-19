import './DetailedInformation.css'

function DetailedInformation() {

  const satern = "https://firebasestorage.googleapis.com/v0/b/space-tycoon-a24a4.appspot.com/o/satern-cropped.png?alt=media&token=39abb5b5-9de8-4e8c-a62c-06908974752a"
  const logo = "https://icons.iconarchive.com/icons/hopstarter/gloss-mac/512/Get-Info-icon.png"

  return (
    <>
      <div className="inforContainer">
        <div className="inforImage">
          <img src={satern} alt="" />
        </div>

        <div className="inforText">
          <h1>Explore Satern</h1>
          <p>
            Saturn is a gas giant with extreme conditions
          </p>
        </div>

        <div className="inforBar">
          <div className="inforBarCart">
            <img src={logo} className="inforImg" alt="" />
            <h4 className="inforBarText">Climate</h4>
          </div>
          <div className="inforBarCart">
            <img src={logo} className="inforImg" alt="" />
            <h4 className="inforBarText">Culture</h4>
          </div>
          <div className="inforBarCart">
            <img src={logo} className="inforImg" alt="" />
            <h4 className="inforBarText">Attractions</h4>
          </div>
        </div>
        <button className="travelButton infor">Continue</button>
      </div>
    </>
  )
}

export default DetailedInformation;