import { useState } from "react";
import "./qcscore-comp2.css";
export default function QcscoreComp2({ setBlur, qcScore }) {
  const [fakeOnBoarding, setFakeOnBoarding] = useState(false);
  return (
    <>
      <div className="qcscoreComp2Container">
        <div className="qcscoreComment">
          <input
            type="text"
            className="commentInput"
            placeholder={qcScore === 100 ? "" : "Enter Comment"}
            disabled={qcScore === 100}
          />
        </div>
        <div className="invalidInputText qcInvalid">
          <img
            src={window.location.origin + "/images/warningIcon.svg"}
            alt="warning icon"
            className="warningIcon"
          />
          Email ID not verified. Please verify again!
        </div>
        <div className="fakeOnBoarding">
          <input
            type="checkbox"
            onChange={(e) => {
                setFakeOnBoarding(e.target.checked);
            }}
          />{" "}
          Fake Onboarding
        </div>
        <div className="btnsContainer">
          <button
            className={`qcScoreBtn ${
              (qcScore < 100) && (!fakeOnBoarding) ? "activateQcScoreBtn" : ""
            }`}
            disabled={(qcScore === 100)||(fakeOnBoarding)}
          >
            REDO
          </button>
          <button
            className={`qcScoreBtn ${
              qcScore < 100 ? "activateQcScoreBtn" : ""
            }`}
            disabled={(qcScore === 100)||(!fakeOnBoarding)}
          >
            REJECT
          </button>
          <button
            className={`qcScoreBtn ${
              (qcScore === 100) && !fakeOnBoarding ? "activateQcScoreBtn" : ""
            }`}
            disabled={(qcScore !== 100) || fakeOnBoarding}
            onClick={() => {
              setBlur(true);
            }}
          >
            APPROVE
          </button>
        </div>
      </div>
    </>
  );
}
