import "./style.css";
export default function ImagePreview({imagePreview,setImagePreview}) {
  return (
    <div className="qcCheckDoneContainerParent">
      <div className={`qcCheckDoneContainer ${imagePreview.status ? `stackTop` : null}`}>
        <img
          className="previewImage"
          src={imagePreview.url}
          alt="work-illustration"
        />
        
        <button
          className="qcOkayBtn"
          onClick={() => {
            imagePreview.status=false;
            setImagePreview({...imagePreview});
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
