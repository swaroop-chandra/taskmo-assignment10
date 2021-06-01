export default function SideBar() {
  return (
    <>
      <div className="sidebarHome">
        <img
          src={window.location.origin + "/images/taskmoLogo.svg"}
          alt={"logo"}
          className="logoImg"
        />
        <div className="QCText">Quality Check</div>
        <div className="dbText">Dashboard</div>
        <div className="homeText">Home</div>
      </div>
    </>
  );
}
