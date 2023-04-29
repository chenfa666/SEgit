import { React } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import Task from "./Task/Task";
import MapTask from "./MapTask/MapTask";
import Button from "react-bootstrap/esm/Button";
import "./taskAssignment.css";

export const TaskAssignment = () => {
  return (
    <div className="task-assignment">
      <Sidebar />
      <div className="task-assignment-container">
        <Navbar pageTitle="Checking & Assigning vehicles" />
        <div className="task-assignment-content">
          <div className="task-content">
            <Task />
          </div>
          <div className="map-task-content">
            <MapTask />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskAssignment;
