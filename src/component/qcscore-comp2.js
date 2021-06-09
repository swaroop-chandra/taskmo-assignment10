export default function QcscoreComp2({setBlur,qcScore}){
    return <>
    <div className="qcscoreComp2Container">

        <div className="qcscoreComment">
            <input type="text" className="commentInput" placeholder={qcScore===100?"":"Enter Comment"} disabled={qcScore===100}/>
        </div>
        <div className="invalidInputText qcInvalid">
              <img src={window.location.origin+"/images/warningIcon.svg"} alt="warning icon" className="warningIcon"/>

                Email ID not verified. Please verify again!
              </div>
        <div className="btnsContainer">
            <button className="qcScoreBtn">REDO</button>
            <button className="qcScoreBtn">REJECT</button>
            <button className="qcScoreBtn" disabled={qcScore!==100} onClick={()=>{
                setBlur(true);
            }}>APPROVE</button>
        </div>
    </div>
    </>
}