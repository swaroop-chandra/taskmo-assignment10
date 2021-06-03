export default function QcCheckDone({blur,setBlur}){
    return <div className="qcCheckDoneContainerParent">
        <div className={`qcCheckDoneContainer ${blur?`stackTop`:null}`}><img className="illustrationImg" src={window.location.origin+"/images/illustration.svg"} alt="work-illustration"/>
        <div>QC Check Done</div>
        <button className="qcOkayBtn" onClick={()=>{
            setBlur(false);
        }}>OKAY</button></div>
    </div>
}