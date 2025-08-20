import "./App.css";
import Loginpg from "./pages/Loginpg";
import Homepg from "./pages/Homepg";
import { Route, Routes, Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import userInfoAtom from "./components/recoil/userInfo";
import React from "react";

function App() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  useEffect(() => {
    if (localStorage?.getItem("userStatus")?.includes("true")) {
      setUserInfo(true);
    } else {
      setUserInfo(false);
    }
  }, [localStorage?.getItem("userState")]);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={userInfo === true ? <Homepg /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={userInfo === true ? <Homepg /> : <Loginpg />}
        />
      </Routes>
    </div>
  );
}

export default App;
