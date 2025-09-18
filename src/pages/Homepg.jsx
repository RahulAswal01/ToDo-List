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
import Updatetask from "../components/Updatetask";
import updateTaskAtom from "../components/recoil/updateTaskAtom";
const Homepg = () => {
  const [apiData, setApiData] = useRecoilState(apiDataAtom);
  const [todoApiData, setTodoApiData] = useRecoilState(todoatom);
  const [addTaskOverlayer, setAddTaskOverlayer] = useRecoilState(addTaskAtom);
  const [updateTaskOverLayer, setUpdateTaskOverLayer] =
    useRecoilState(updateTaskAtom);
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
  return (
    <div className="relative">
      {/* {update task} */}
      {updateTaskOverLayer && (
        <div>
          {console.log("yes i am working")}
          <div
            className="over-layer"
            onClick={() => {
              setUpdateTaskOverLayer(null);
            }}
          ></div>
          <Updatetask />
        </div>
      )}
      {/* add task */}
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
