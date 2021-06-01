import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sidebarHome">
        <img
          src={window.location.origin + "/images/taskmoLogo.svg"}
          alt={"logo"}
          className="logoImg"
        />
        <div className="QCText">Quality Check</div>
        <div className="dbText">Dashboard</div>
        <div className="homeText">Home</div>
      </div>

      <div className="main-content">
        <div className="form-container">
          <div className="back-arrow">
            <img
              src={window.location.origin + "/images/backArrow.svg"}
              alt="back-arrow"
            />
          </div>
          <div className="form">
            <div>
              <div>Project Name</div>
              <div>
                <input className="myInputField" disabled value={`Jio Mart`} />
              </div>
            </div>
            <div>
              <div>Date</div>
              <div>
                <input
                  className="myInputField"
                  disabled
                  value={`25th July 2021`}
                />
              </div>
            </div>
            <div>
              <div>Area</div>
              <div>
                <input
                  className="myInputField"
                  disabled
                  value={`Bangaluru, Karnataka`}
                />
              </div>
            </div>
            <div>
              <div>Pan Card</div>
              <div className="panCardContainer">
                {/* <input className="myInputField" disabled /> */}
                <img
                  src={window.location.origin + "/images/panCard.svg"}
                  alt="pan-card"
                  className="panImg"
                />
              </div>
            </div>
            <div>
              <div>Mobile</div>
              <div>
                <input
                  className="myInputField invalidInput"
                  disabled
                  value={`7879872341`}
                />
              </div>
              <div className="invalidInputText">
                Email ID not verified. Please verify again!
              </div>
            </div>
            <div>
              <div>Email</div>
              <div>
                <input
                  className="myInputField invalidInput"
                  disabled
                  value={`rahul420@gmail.com`}
                />
              </div>
              <div className="invalidInputText">
                Email ID not verified. Please verify again!
              </div>
            </div>
            <div>
              <div>Email</div>
              <div>
                <input
                  className="myInputField invalidInput"
                  disabled
                  value={`rahul420@gmail.com`}
                />
              </div>
              <div className="invalidInputText">
                Email ID not verified. Please verify again!
              </div>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="remark">
            <div className="remarkIcon">
              {/*<img src={window.location.origin+"/images/remarkIcon.svg"} alt="remark"/> */}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
