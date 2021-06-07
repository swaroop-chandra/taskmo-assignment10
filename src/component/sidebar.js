import { useHistory } from "react-router";

export default function SideBar({ setBlur }) {
  const history = useHistory();
  return (
    <>
      <div className={`sidebarHome`}>
        <img
          src={window.location.origin + "/images/taskmoLogo.svg"}
          alt={"logo"}
          className="logoImg"
          onClick={() => {
            setBlur(true);
          }}
        />
        <div className="QCText">Quality Check</div>
        <div className="dbText">Dashboard</div>
        <div
          className="homeText homeHover"
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Home
        </div>
      </div>
    </>
  );
}
