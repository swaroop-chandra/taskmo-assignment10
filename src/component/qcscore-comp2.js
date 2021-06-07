export default function QcscoreComp2({setBlur}){
    return <>
    <div className="qcscoreComp2Container">

        <div className="qcscoreComment">
            <input className="commentInput" placeholder="Enter Comment"/>
        </div>
        <div className="invalidInputText qcInvalid">
              <img src={window.location.origin+"/images/warningIcon.svg"} alt="warning icon" className="warningIcon"/>

                Email ID not verified. Please verify again!
              </div>
        <div className="btnsContainer">
            <button className="qcScoreBtn">REDO</button>
            <button className="qcScoreBtn">REJECT</button>
            <button className="qcScoreBtn" onClick={()=>{
                setBlur(true);
            }}>APPROVE</button>
        </div>
    </div>
    </>
}