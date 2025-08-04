import React from "react";
import Headercom from "../components/Headercom";
import "./homepg.css";
import Bodycom from "../components/Bodycom";
import Filter from "../components/Filter";
const homepg = () => {
  const data = {
    status: [
      { label: "completed", value: 3 },
      { label: "pending", value: 2 },
      { label: "archived", value: 1 },
      { label: "all", value: 6 },
    ],
  };
  return (
    <div>
      <Headercom />
      <div className="bodycontainer">
        <Bodycom />
        <Filter apiData={data} />
      </div>
    </div>
  );
};

export default homepg;
