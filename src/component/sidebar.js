export default function SideBar({setBlur,blur}) {
  return (
    <>
      <div className={`sidebarHome ${blur?"myBlur":null}`}>
        <img
          src={window.location.origin + "/images/taskmoLogo.svg"}
          alt={"logo"}
          className="logoImg"
          onClick={()=>{
            setBlur(true);
          }}
        />
        <div className="QCText">Quality Check</div>
        <div className="dbText">Dashboard</div>
        <div className="homeText">Home</div>
      </div>
    </>
  );
}
