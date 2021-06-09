import { optionsPie } from "../dataset/chartDataset";
import Chart from "react-apexcharts";
import QcscoreComp2 from "./qcscore-comp2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MyForm({ setBlur }) {
  const qcCount = 3;
  const [totalCount,setTotalCount]=useState(0);
  const [qcScore, setQcScore] = useState(0);
  const [yesBtnObj, setYesBtnObj] = useState({
    mobile: "none",
    email1: "none",
    email2: "none",
  }); //yes no none
  
  useEffect(()=>{
    setTotalCount(Object.keys(yesBtnObj).length);
  },[]);

  const updateScore = (e) => {
    const label = e.target.dataset.label;
    const value = e.target.innerText;
    if (value === "YES") {
      yesBtnObj[label] = "yes";
      setYesBtnObj({ ...yesBtnObj });
      console.log("I am in Yes");
      console.log(yesBtnObj);
      let count = 0;
      for (const key in yesBtnObj) {
        if (yesBtnObj[key] === "yes") {
          count = count + 1;
        }
      }
      
      const score=(count/totalCount)*100;
      console.log(score);
      setQcScore(Math.trunc(score));
      optionsPie.series=[Math.trunc(score), 100-Math.trunc(score)];
      
    } else if (value === "NO") {
      yesBtnObj[label] = "no";
      setYesBtnObj({ ...yesBtnObj });
      let count = 0;
      for (const key in yesBtnObj) {
        if (yesBtnObj[key] === "yes") {
          count = count + 1;
        }
      }
      
      const score=(count/totalCount)*100;
      console.log(score);
      setQcScore(Math.trunc(score));
      console.log("I am in No");
      console.log(yesBtnObj);
      optionsPie.series=[Math.trunc(score), 100-Math.trunc(score)];
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="backArrow">
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
                <div
                  style={{
                    pointerEvents: `${
                      yesBtnObj.mobile === "no" ? "none" : "auto"
                    }`,
                  }}
                  className={`btn ${yesBtnObj.mobile === "no" ? "noBtn" : ""}`}
                  onClick={updateScore}
                  data-label="mobile"
                >
                  NO
                </div>
                <div
                  style={{
                    pointerEvents: `${
                      yesBtnObj.mobile === "yes" ? "none" : "auto"
                    }`,
                  }}
                  className={`btn ${
                    yesBtnObj.mobile === "yes" ? "yesBtn" : ""
                  }`}
                  data-label="mobile"
                  onClick={updateScore}
                  value={`YES`}
                >
                  YES
                </div>
              </div>
            </div>
            <div className="invalidInputText">
              <img
                src={window.location.origin + "/images/warningIcon.svg"}
                alt="warning icon"
                className="warningIcon"
              />
              Email ID not verified. Please verify again!
            </div>
          </div>
          <div className="inputContainer">
            <div>Email1</div>
            <div className="inputAndYesNo">
              <input
                className="myInputField invalidInput"
                disabled
                value={`rahul420@gmail.com`}
              />
              <div className="yesNo">
                <div
                  style={{
                    pointerEvents: `${
                      yesBtnObj.email1 === "no" ? "none" : "auto"
                    }`,
                  }}
                  className={`btn ${yesBtnObj.email1 === "no" ? "noBtn" : ""}`}
                  onClick={updateScore}
                  data-label="email1"
                >
                  NO
                </div>
                <div
                  style={{
                    pointerEvents: `${
                      yesBtnObj.email1 === "yes" ? "none" : "auto"
                    }`,
                  }}
                  className={`btn ${
                    yesBtnObj.email1 === "yes" ? "yesBtn" : ""
                  }`}
                  data-label="email1"
                  onClick={updateScore}
                  value={`YES`}
                >
                  YES
                </div>
              </div>
            </div>

            <div className="invalidInputText">
              <img
                src={window.location.origin + "/images/warningIcon.svg"}
                alt="warning icon"
                className="warningIcon"
              />
              Email ID not verified. Please verify again!
            </div>
          </div>
          <div className="inputContainer">
            <div>Email2</div>
            <div className="inputAndYesNo">
              <input
                className="myInputField invalidInput"
                disabled
                value={`rahul420@gmail.com`}
              />
              <div className="yesNo">
                <div
                  style={{
                    pointerEvents: `${
                      yesBtnObj.email2 === "no" ? "none" : "auto"
                    }`,
                  }}
                  className={`btn ${yesBtnObj.email2 === "no" ? "noBtn" : ""}`}
                  onClick={updateScore}
                  data-label="email2"
                >
                  NO
                </div>
                <div
                  style={{
                    pointerEvents: `${
                      yesBtnObj.email2 === "yes" ? "none" : "auto"
                    }`,
                  }}
                  className={`btn ${
                    yesBtnObj.email2 === "yes" ? "yesBtn" : ""
                  }`}
                  data-label="email2"
                  onClick={updateScore}
                  value={`YES`}
                >
                  YES
                </div>
              </div>
            </div>

            <div className="invalidInputText">
              <img
                src={window.location.origin + "/images/warningIcon.svg"}
                alt="warning icon"
                className="warningIcon"
              />
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
            <div className="donutLegend">{`${qcScore}%`}</div>

            <Chart
              options={optionsPie.options}
              series={optionsPie.series}
              type="donut"
              width="200px"
            />
          </div>
          <Switch>
            <Route exact path="/main/redo">
              <div className="redoText">REDO</div>
            </Route>
            <Route exact path="/main">
              <QcscoreComp2 setBlur={setBlur} qcScore={qcScore} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}
