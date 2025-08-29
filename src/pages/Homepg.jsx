import React from "react";
import Headercom from "../components/Headercom";
import "./homepg.css";
import Bodycom from "../components/Bodycom";
import Filter from "../components/Filter";
import Todos from "../components/Todos";
import AddTask from "../components/AddTask";
import addTaskAtom from "../components/recoil/addTaskAtom";
import { useRecoilState } from "recoil";
import apiDataAtom from "../components/recoil/apiDataAtom";
import todoatom from "../components/recoil/todoatom";
import { useEffect } from "react";
const Homepg = () => {
  const [apiData, setApiData] = useRecoilState(apiDataAtom);
  const [todoApiData, setTodoApiData] = useRecoilState(todoatom);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/inital_call", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApiData(data?.[0]?.stats);
        setTodoApiData(data?.[0]?.todo);
      })
      .catch((error) => alert(error));
  }, []);
  const [addTaskOverlayer, setAddTaskOverlayer] = useRecoilState(addTaskAtom);
  return (
    <div className="relative">
      {addTaskOverlayer && (
        <div>
          <div
            className="over-layer"
            onClick={() => {
              setAddTaskOverlayer(null);
            }}
          ></div>
          <AddTask />
        </div>
      )}

      <Headercom />
      <div className="bodycontainer">
        <Bodycom />
        <Filter />
        <Todos />
      </div>
      <button
        className="c02"
        onClick={() => {
          if (addTaskOverlayer) {
            setAddTaskOverlayer(null);
          } else {
            setAddTaskOverlayer(true);
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

export default Homepg;
