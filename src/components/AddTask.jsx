import React, { useRef } from "react";
import addTaskAtom from "./recoil/addTaskAtom";
import { useRecoilState } from "recoil";
import todoatom from "./recoil/todoatom";
import apiDataAtom from "./recoil/apiDataAtom";

const AddTask = () => {
  const [todoApiData, setTodoApiData] = useRecoilState(todoatom);
  const [apiData, setApiData] = useRecoilState(apiDataAtom);
  const titleref = useRef(null);
  const descref = useRef(null);
  const addTaskHandler = (e) => {
    e.preventDefault();
    const data = {
      title: titleref?.current?.value,
      desc: descref?.current?.value,
    };
    fetch("http://127.0.0.1:8000/create_todo", {
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
  };
  const [addTaskOverlayer, setAddTaskOverlayer] = useRecoilState(addTaskAtom);
  return (
    <div className="add-task-cont">
      <div className="contents">
        <h1>Add New Task</h1>
        <form action="#" onSubmit={addTaskHandler}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" ref={titleref} required />
          <br />
          <br />
          <label htmlFor="desc">description</label>
          <textarea name="desc" id="" ref={descref} required></textarea>
          <br />
          <br />
          <button>add task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
