import './innerouter.css'

function InnerOuter() {

  return (
    <>
      <div className="innerOuterContainer">
        <div className="innerOuterContent">
          <h2 className = "innerOuterText">Where are you <br />heading to?</h2>
          <div className="IObtnContainer">
            <a href="/innerouter">
              <button className="IOButton">
                Inner Solar
              </button>
            </a>
            <a href="/outersolar">
              <button className="IOButton">
                Outer Solar
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default InnerOuter;