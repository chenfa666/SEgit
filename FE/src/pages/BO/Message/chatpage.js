import Chat from "./Chat";
import SidebarJan from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import "../../Tool/Tool";
import MOCK_DATA from "./utils/MOCK_DATA"
import React, { useState, useEffect } from "react";
import { COLUMNS } from "./utils/columns";
import { Table } from "../../../components/Table/Table";
import axios from "axios";
function ChatApp() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // use the imported file instead of axios.get
    const objs = MOCK_DATA;
    const data = objs.map((obj) => {
      return {
        id: obj.id,
        name: obj.name,
        email: obj.email,
        status: obj.status,
      };
    });
    setPosts(data);
  }, []);

  return (
    <div className="tool">
      <SidebarJan />
      <div className="toolContainer">
        <Navbar />
        <div className="content">
          <div class="row">
            <div class="table-responsive col-md-6" style={{ width: "40%" }}>
              <Table columns={COLUMNS} data={posts} />
            </div>
            <div class="table-responsive col-md-6" style={{ width: "60%" }}>
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
