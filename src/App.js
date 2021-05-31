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
          <div>
            {/* <div>Project Name</div>
            <div><input/></div> */}
          </div>
        </div>
        <div className="right-content">
          <div className="remark">
              <div className="remarkIcon">{/*<img src={window.location.origin+"/images/remarkIcon.svg"} alt="remark"/> */}</div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
