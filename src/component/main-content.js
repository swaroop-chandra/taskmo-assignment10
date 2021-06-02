import { optionsPie } from "../dataset/chartDataset";
import Chart from "react-apexcharts";

export default function MainContent() {
  return (
    <>
      <div className="main-content">
        <div className="form-container">
          <div className="back-arrow">
            <img
              src={window.location.origin + "/images/backArrow.svg"}
              alt="back-arrow"
              className="backArrowImg"
            />
          </div>
          <div className="form">
            <div className="inputContainer">
              <div>Project Name</div>
              <div>
                <input className="myInputField" disabled value={`Jio Mart`} />
              </div>
            </div>
            <div className="inputContainer">
              <div>Date</div>
              <div>
                <input
                  className="myInputField"
                  disabled
                  value={`25th July 2021`}
                />
              </div>
            </div>
            <div className="inputContainer">
              <div>Area</div>
              <div>
                <input
                  className="myInputField"
                  disabled
                  value={`Bangaluru, Karnataka`}
                />
              </div>
            </div>
            <div className="inputContainer">
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
            <div className="inputContainer">
              <div>Mobile</div>
              <div className="inputAndYesNo">
                <input
                  className="myInputField invalidInput"
                  disabled
                  value={`7879872341`}
                />
                <div className="yesNo">
                  <div className="btn">NO</div>
                  <div className="btn">YES</div>
                </div>
              </div>
              <div className="invalidInputText">
                Email ID not verified. Please verify again!
              </div>
            </div>
            <div className="inputContainer">
              <div>Email</div>
              <div className="inputAndYesNo">
                <input
                  className="myInputField invalidInput"
                  disabled
                  value={`rahul420@gmail.com`}
                />
                <div className="yesNo">
                  <div className="btn">NO</div>
                  <div className="btn yesBtn">YES</div>
                </div>
              </div>

              <div className="invalidInputText">
                Email ID not verified. Please verify again!
              </div>
            </div>
            <div className="inputContainer">
              <div>Email</div>
              <div className="inputAndYesNo">
                <input
                  className="myInputField invalidInput"
                  disabled
                  value={`rahul420@gmail.com`}
                />
                <div className="yesNo">
                  <div className="btn noBtn">NO</div>
                  <div className="btn">YES</div>
                </div>
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
              <img
                src={window.location.origin + "/images/remarkIcon.svg"}
                alt="remark"
              />
              <div>Remark</div>
            </div>
            <div>
              <div className="qcStyle">QC01</div>
              <div className="qcContent invalidInputText">
                Email ID is incorrect
              </div>
            </div>
            <div>
              <div className="qcStyle">QC02</div>
              <div className="qcContent invalidInputText">
                Email ID is incorrect
              </div>
            </div>
          </div>
          <div className="qcScore">
            <div className="qcScoreText">QC Score</div>
            <div className="donutStyle">
              <div className="donutLegend">80%</div>
                
                  <Chart
                    options={optionsPie.options}
                    series={optionsPie.series}
                    type="donut"
                    width="200px"
                    
                  />
                
              
            </div>
            <div className="redoText">REDO</div>
          </div>
        </div>
      </div>
    </>
  );
}
