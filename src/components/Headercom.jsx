import React from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
const Headercom = () => {
  return (
    <div>
      <div className="c01">
        <h2 className="c03">ToDo X</h2>
        <button className="logout-btn">
          <LogoutRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default Headercom;
