import React, { useRef } from "react";
import addTaskAtom from "./recoil/addTaskAtom";
import { useRecoilState } from "recoil";
import todoatom from "./recoil/todoatom";
import apiDataAtom from "./recoil/apiDataAtom";
import btn_manager from "./recoil/btn_manager";

const AddTask = () => {
  const [todoApiData, setTodoApiData] = useRecoilState(todoatom);
  const [apiData, setApiData] = useRecoilState(apiDataAtom);
  const [btnTracker, setBtnTracker] = useRecoilState(btn_manager);
  const titleref = useRef(null);
  const descref = useRef(null);
  const addTaskHandler = (e) => {
    e.preventDefault();
    const data = {
      title: titleref?.current?.value,
      desc: descref?.current?.value,
    };
    if (btnTracker === "all") {
      fetch("http://127.0.0.1:8000/create_todo_btn_all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setApiData(data?.stats);
          setTodoApiData(data?.todo);
          setAddTaskOverlayer(false);
        })
        .catch((error) => console.log(error));
    } else if (btnTracker === "completed") {
      fetch("http://127.0.0.1:8000/create_todo_btn_completed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setApiData(data?.stats);
          setTodoApiData(data?.todo);
          setAddTaskOverlayer(false);
        })
        .catch((error) => console.log(error));
    } else if (btnTracker === "in progress") {
      fetch("http://127.0.0.1:8000/create_todo_btn_in_progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setApiData(data?.stats);
          setTodoApiData(data?.todo);
          setAddTaskOverlayer(false);
        })
        .catch((error) => console.log(error));
    } else if (btnTracker === "archived") {
      fetch("http://127.0.0.1:8000/create_todo_btn_archived", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setApiData(data?.stats);
          setTodoApiData(data?.todo);
          setAddTaskOverlayer(false);
        })
        .catch((error) => console.log(error));
    } else {
      console.log(
        "something wrong happing with create todo kindly check AddTask.jsx"
      );
    }
  };
  const [addTaskOverlayer, setAddTaskOverlayer] = useRecoilState(addTaskAtom);
  return (
    <div className="add-task-cont">
      <div className="contents">
        <h1>Add New Task</h1>
        <form action="#" onSubmit={addTaskHandler}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            ref={titleref}
            required
            autoComplete="off"
          />
          <br />
          <br />
          <label htmlFor="desc">description</label>
          <textarea
            name="desc"
            id=""
            ref={descref}
            required
            autoComplete="off"
          ></textarea>
          <br />
          <br />
          <button type="submit">add task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
