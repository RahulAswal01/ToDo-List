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
  const data = {
    stats: [
      { label: "completed", value: 3 },
      { label: "in progress", value: 2 },
      { label: "archived", value: 1 },
      { label: "all", value: 6 },
    ],
    todo: [
      {
        title: "title1",
        description:
          "Lorem ipsum dolor, sit amet consectetur adiporem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur corporis autem laudantaliquid ipsa praesentiumdi Lorem ipsum dolor, sit amet ",
        status: "completed",
        color: "#00ac69",
      },
      {
        title: "title2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. F",
        status: "pending",
        color: "#3171e0ff",
      },
      {
        title: "title3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, facere architecto. Odit repellendus optio non iste nulla veritatis eius dolor?",
        status: "archived",
        color: "#8b33b1ff",
      },
      {
        title: "title4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, facere architecto. Odit repellendus optio non iste nulla veritatis eius dolor?",
        status: "all",
        color: "#bf297eff",
      },
      {
        title: "title5",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, facere architecto. Odit repellendus optio non iste nulla veritatis eius dolor?",
        status: "archived",
        color: "#8b33b1ff",
      },
      {
        title: "title6",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, facere architecto. Odit repellendus optio non iste nulla veritatis eius dolor?",
        status: "archived",
        color: "#8b33b1ff",
      },
      {
        title: "title7",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, facere architecto. Odit repellendus optio non iste nulla veritatis eius dolor?",
        status: "archived",
        color: "#8b33b1ff",
      },
    ],
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/inital_call", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data?.[0]?.todo);
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
