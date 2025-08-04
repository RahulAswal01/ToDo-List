import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const bodycom = () => {
  return (
    <div>
      <div className="c04">
        <input
          type="text"
          placeholder="Search here.. "
          className="c05"
          autoComplete="off"
        />
        <SearchRoundedIcon className="c06" style={{ fontSize: 28 }} />
      </div>
    </div>
  );
};

export default bodycom;
