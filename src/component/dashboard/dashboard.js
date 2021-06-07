import React from "react";
import "./dashboard.css";
import Chart from "react-apexcharts";
import { optionsDonut } from "../../dataset/chartDataset";

function Dashboard() {
  return (
    <div className="dash">
      <div className="dash_row1">
        <div className="dash_card">
          <div className="dash_col1">
            <Chart
              options={optionsDonut}
              series={optionsDonut.series}
              type="donut"
              width="320px"
              height="500px"
            />
          </div>
          <div className="dash_col2">
            <div className="dash_row2">
              <input type="button" className="dash_button" value="this month" />
              <input type="button" className="dash_button" value="overall" />
            </div>
            <div className="dash_row2">
              <div className="dash_card2">
                <div className="dash_p1">Total leads</div>
                <div className="dash_p2">236</div>
                <div className="dash_p3">15%</div>
              </div>
              <div className="dash_card2">
                <div className="dash_p1">Discrepancy Percentage</div>
                <div className="dash_p2">60%</div>
                <div className="dash_p3">7%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dash_row1">
        <div className="dash_card1">
          <div className="dash_row3">
            <p className="dash_p4">List of QC</p>
            <input type="button" className="dash_button1" value="Date" />
          </div>
          <div className="dash_row4">
            <table className="t_dash">
              <tr className="t_tr">
                <th className="t_th">Leads ID</th>
                <th className="t_th">Project details</th>
                <th className="t_th">lead details</th>
                <th className="t_th">QC details</th>
                <th className="t_th">location</th>
                <th className="t_th">counter</th>
                <th className="t_th">QC status</th>
                <th className="t_th">Discrepancy Status </th>
              </tr>
              <tr className="t_tr">
                <td className="t_p6">TMo41</td>
                <td className="t_td">
                  <p className="t_p1">jio mart</p>
                  <p className="t_p2">11245</p>
                </td>
                <td className="t_td">
                  <p className="t_p1">24 may 2020</p>
                  <p className="t_p2">12:40pm</p>
                </td>
                <td className="t_td">
                  <p className="t_p1">02 june 2020</p>
                  <p className="t_p2">12:40pm</p>
                </td>
                <td className="t_td">
                  <p className="t_p1">Bangalore</p>
                  <p className="t_p2">Karnataka</p>
                </td>
                <td className="t_p3">024</td>
                <td>
                  <p className="t_p4">passed</p>
                </td>
                <td className="t_p5">true</td>
              </tr>
              <tr className="t_tr">
                <td className="t_p6">TMo41</td>
                <td className="t_td">
                  <p className="t_p1">jio mart</p>
                  <p className="t_p2">11245</p>
                </td>
                <td className="t_td">
                  <p className="t_p1">24 may 2020</p>
                  <p className="t_p2">12:40pm</p>
                </td>
                <td className="t_td">
                  <p className="t_p1">02 june 2020</p>
                  <p className="t_p2">12:40pm</p>
                </td>
                <td className="t_td">
                  <p className="t_p1">Bangalore</p>
                  <p className="t_p2">Karnataka</p>
                </td>
                <td className="t_p3">024</td>
                <td>
                  <p className="t_p4">passed</p>
                </td>
                <td className="t_p5">true</td>
              </tr>
              <tr className="t_tr">
                <td className="t_p6">TMo41</td>
                <td className="t_td">
                  <p className="t_p1">jio mart</p>
                  <p className="t_p2">11245</p>
                </td>
                <td className="t_td">
                  <p className="t_p1">24 may 2020</p>
                  <p className="t_p2">12:40pm</p>
                </td>
                <td className="t_td">
                  <p className="t_p1">02 june 2020</p>
                  <p className="t_p2">12:40pm</p>
                </td>
                <td className="t_td">
                  <p className="t_p1">Bangalore</p>
                  <p className="t_p2">Karnataka</p>
                </td>
                <td className="t_p3">024</td>
                <td>
                  <p className="t_p7">Redo</p>
                </td>
                <td className="t_p8">false</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
