import React from "react";
import Headercom from "../components/Headercom";
import "./homepg.css";
import Bodycom from "../components/Bodycom";
import Filter from "../components/Filter";
import Todos from "../components/Todos";
const Homepg = () => {
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
  return (
    <div>
      <Headercom />
      <div className="bodycontainer">
        <Bodycom />
        <Filter apiData={data} />
        <Todos apiData={data?.todo} />
      </div>
      <button className="c02">Create Todo</button>
    </div>
  );
};

export default Homepg;
