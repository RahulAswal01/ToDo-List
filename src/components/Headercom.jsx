import React from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import userInfoAtom from "./recoil/userInfo";
import { useRecoilState } from "recoil";
const Headercom = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  return (
    <div>
      <div className="c01">
        <h2 className="c03">ToDo X</h2>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage?.clear();
            setUserInfo(false);
          }}
        >
          <LogoutRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default Headercom;
