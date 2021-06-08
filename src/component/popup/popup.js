import React from "react";
import "./popup.css";

function popup() {
  return (
    <div className="popup">
      <div className="pop_card">
        <div className="pop_col1">
          <img
            src={window.location.origin + "/images/Ellipse 4.png"}
            alt="profile"
            className="profile42"
          />
        </div>

        <div className="pop_col2">
          <hr className="pop_hr2" />
          <div className="pop_flex">
            <img
              src={window.location.origin + "/images/Ellipse 2.svg"}
              alt="profile"
              className="icon1"
            />
            <p className="pop_p1">jiomart</p>
          </div>
          <div className="pop_flex">
            <img
              src={window.location.origin + "/images/Vector.svg"}
              alt="profile"
              className="icon2"
            />
            <p className="pop_p2">mumbai, maharastra</p>
          </div>

          <hr className="pop_hr" />
          <div className="pop_row1">
            <p className="pop_p3">LEAD ID</p>
            <p className="pop_p4">Tm007</p>
          </div>
        </div>
        <div className="pop_col3">
          <div className="pop_row3">
            <p className="pop_p3">Project Date</p>
            <p className="pop_p5">26 Jan 2021</p>
          </div>
          <div className="pop_row2">
            <input type="button" value="reject" className="b_pop1" />
            <input type="button" value="accept" className="b_pop1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default popup;
