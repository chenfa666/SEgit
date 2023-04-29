import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faTruckFront,
  faUsers,
  faLocationDot,
  faComments,
  faListCheck,
  faSquareCheck,
  faUserCheck,
  faSquareXmark,
  faCheck,

} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import logo from "../../assets/images/UWC.png";
import "./sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="avatar1">
            <img src={logo} className="uwc-logo" />
          </span>
        </Link>
      </div>
      <hr />
      <div className="icon-list">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="tab">
              <FontAwesomeIcon icon={faHouseUser} className="side-icon" />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/workers" style={{ textDecoration: "none" }}>
            <li className="tab">
              <FontAwesomeIcon icon={faUsers} className="side-icon" />
              <span>Workers</span>
            </li>
          </Link>
          <Link to="/vehicles" style={{ textDecoration: "none" }}>
            <li className="tab">
              <FontAwesomeIcon icon={faTruckFront} className="side-icon" />
              <span>Vehicles</span>
            </li>
          </Link>
          <Link to="/mcps" style={{ textDecoration: "none" }}>
            <li className="tab">
              <FontAwesomeIcon icon={faLocationDot} className="side-icon" />
              <span>MCPs</span>
            </li>
          </Link>
          <Link
            to="/task-assignment/mcp-assignment"
            style={{ textDecoration: "none" }}
          >
            <li className="tab">
              <FontAwesomeIcon icon={faListCheck} className="side-icon" />
              <span>Assign Task</span>
            </li>
          </Link>
          <Link to="/message" style={{ textDecoration: "none" }}>
            <li className="tab">
              <FontAwesomeIcon icon={faComments} className="side-icon" />
              <span>Message</span>
            </li>
          </Link>
        </ul>
      </div>
      <hr />
      {props.isDashboard && (
        <div className="icon-list">
          <h5 className="side-title">STATISTICS</h5>
          <ul>
            <li className="stats-tab">
              <FontAwesomeIcon
                icon={faCheck}
                className="side-icon bottom-icon"
              />
              <span>Online</span>
              <span className="stats">150</span>
            </li>
            <li className="stats-tab">
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="side-icon bottom-icon"
              />
              <span>Working</span>
              <span className="stats">99</span>
            </li>
            <li className="stats-tab">
              <FontAwesomeIcon
                icon={faUserCheck}
                className="side-icon bottom-icon"
              />
              <span>Finished</span>
              <span className="stats">77</span>
            </li>
            <li className="stats-tab">
              <FontAwesomeIcon
                icon={faSquareXmark}
                className="side-icon bottom-icon"
              />
              <span>Offline</span>
              <span className="stats">2102</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
