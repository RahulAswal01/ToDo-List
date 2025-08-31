import React from "react";

const Updatetask = () => {
  const updateTaskHandler = () => {
    console.log("update");
  };
  return (
    <div>
      <div className="innerContainer">
        <h1>Update Task</h1>
        <form action="#" onSubmit={updateTaskHandler}>
          <label htmlFor="tile">Title : </label>
          <input type="text" name="title" autoComplete="" />
          <br />
          <br />
          <label htmlFor="desc">description</label>
          <textarea name="desc" id="" autoComplete="off"></textarea>
          <br />
          <br />
          <button>Update Todo</button>
        </form>
      </div>
    </div>
  );
};

export default Updatetask;
