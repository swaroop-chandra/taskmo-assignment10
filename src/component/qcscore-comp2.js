import { useState } from "react";
import { NINJACART_REDO } from "../utils";
import "./qcscore-comp2.css";
export default function QcscoreComp2({ setBlur, qcScore }) {
  const [fakeOnBoarding, setFakeOnBoarding] = useState(false);
  const [comment,setComment]=useState("");
  const redoFunc=()=>{
    setBlur(true);
    console.log("comment",comment);
    fetch(NINJACART_REDO,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        "lead_id": "31",
        "qc_admin_id": "1",
        "qc_remark": comment
    })
    }).then(r=>r.json()).then((r)=>{
      console.log(r);
    }).catch((e)=>{
      console.log("Error: While Redo ",e);
    })
  }
  return (
    <>
      <div className="qcscoreComp2Container">
        {qcScore===100?<></>:<><div className="qcscoreComment">
          <input
            type="text"
            className="commentInput"
            placeholder={qcScore === 100 ? "" : "Enter Comment"}
            disabled={qcScore === 100}
            onChange={(e)=>{setComment(e.target.value.trim())}}
          />
          
        </div><div className="fakeOnBoarding">
          <input
            type="checkbox"
            onChange={(e) => {
                setFakeOnBoarding(e.target.checked);
            }}
          />{" "}
          Fake Onboarding
        </div></>}
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
              (qcScore < 100) && (!fakeOnBoarding) && !(comment.trim().length===0) ? "activateQcScoreBtn" : ""
            }`}
            disabled={(qcScore === 100) || comment.trim().length===0 ||(fakeOnBoarding)}
            onClick={redoFunc}
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
