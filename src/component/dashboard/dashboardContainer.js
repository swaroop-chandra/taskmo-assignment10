import { useState } from "react";
import SideBar from "../sidebar";
import Dashboard from "./dashboard";
import Popup from "./../popup/popup";
import "./dashboard.css";
export default function DashboardContainer({setAcceptProject,acceptProject}) {
    
  return (
    <>
      <div className="App1">
        <div className="app_col1">
          <SideBar />
        </div>
        <div className="app_col2">
          <Dashboard acceptProject={acceptProject}/>
          <Popup setAcceptProject={setAcceptProject} acceptProject={acceptProject}/>
        </div>
      </div>
    </>
  );
}
