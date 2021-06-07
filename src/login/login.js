import React from "react";
import "./login.css";

function Login() {
  return (
    // <div
    //   className="login"
    //   style={{
    //     height: "600px",
    //     background: `url('${process.env.PUBLIC_URL}/images/bgImage.png')`,
    //   }}
    // >
    //   <p className="login_p1">Welcome Back !</p>

    //   <div className="login_card">
    //     <div className="login_button">
    //       <img
    //         src={window.location.origin + "/images/gLogo.svg"}
    //         alt="profile"
    //         className="login_img"
    //       />
    //       <p className="login_p">login with google</p>
    //     </div>
    //   </div>
    // </div>
    <div className="login">
      <div className="log_col1">
        <p className="login_p1">Welcome Back !</p>
        <img
          src={window.location.origin + "/images/bgImage.svg"}
          alt="profile"
          className="bg_img"
        />
      </div>
      <div className="log_col1">
        <div className="login_card">
          <div className="login_button">
            <img
              src={window.location.origin + "/images/gLogo.svg"}
              alt="profile"
              className="login_img"
            />
            <p className="login_p">login with google</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
