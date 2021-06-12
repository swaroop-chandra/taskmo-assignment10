import { useState } from "react";
import {
  NINJACART_APPROVE_URL,
  NINJACART_REDO_URL,
  NINJACART_REJECT_URL,
} from "../utils";
import "./qcscore-comp2.css";
export default function QcscoreComp2({ setBlur, qcScore, leadId }) {
  const [fakeOnBoarding, setFakeOnBoarding] = useState(false);
  const [comment, setComment] = useState("");
  const redoFunc = () => {
    setBlur(true);
    fetch(NINJACART_REDO_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        lead_id: leadId,
        qc_admin_id: "1",
        qc_remark: comment,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log("#Redo", r);
      })
      .catch((e) => {
        console.log("Error: While Redo ", e);
      });
  };

  const rejectFunc = () => {
    setBlur(true);
    fetch(NINJACART_REJECT_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        lead_id: leadId,
        qc_admin_id: "1",
        qc_remark: comment,
        is_fake: `${fakeOnBoarding ? "1" : "0"}`,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log("#Reject", r);
      })
      .catch((e) => {
        console.log("Error: While Reject ", e);
      });
  };

  const approveFunc = () => {
    setBlur(true);
    fetch(NINJACART_APPROVE_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        lead_id: leadId,
        qc_admin_id: "1",
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log("#Approve", r);
      })
      .catch((e) => {
        console.log("Error: While Approve ", e);
      });
  };
  return (
    <>
      <div className="qcscoreComp2Container">
        {qcScore === 100 ? (
          <></>
        ) : (
          <>
            <div className="qcscoreComment">
              <input
                type="text"
                className="commentInput"
                placeholder={qcScore === 100 ? "" : "Enter Comment"}
                disabled={qcScore === 100}
                onChange={(e) => {
                  setComment(e.target.value.trim());
                }}
              />
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
          </>
        )}
        {/* <div className="invalidInputText qcInvalid">
          <img
            src={window.location.origin + "/images/warningIcon.svg"}
            alt="warning icon"
            className="warningIcon"
          />
          Email ID not verified. Please verify again!
        </div> */}

        <div className="btnsContainer">
          <button
            className={`qcScoreBtn ${
              qcScore < 100 && !fakeOnBoarding && !(comment.trim().length === 0)
                ? "activateQcScoreBtn"
                : ""
            }`}
            disabled={
              qcScore === 100 || comment.trim().length === 0 || fakeOnBoarding
            }
            onClick={redoFunc}
          >
            REDO
          </button>
          <button
            className={`qcScoreBtn ${
              qcScore < 100 && comment.trim().length>0 ? "activateQcScoreBtn" : ""
            }`}
            disabled={
              qcScore === 100 || !fakeOnBoarding || comment.trim().length === 0
            }
            onClick={rejectFunc}
          >
            REJECT
          </button>
          <button
            className={`qcScoreBtn ${
              qcScore === 100 && !fakeOnBoarding ? "activateQcScoreBtn" : ""
            }`}
            disabled={qcScore !== 100 || fakeOnBoarding}
            onClick={approveFunc}
          >
            APPROVE
          </button>
        </div>
      </div>
    </>
  );
}
