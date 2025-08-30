import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import searchInput from "./recoil/searchInput";
import { useRecoilState } from "recoil";
import todoatom from "./recoil/todoatom";
import { useEffect } from "react";
import apiDataAtom from "./recoil/apiDataAtom";
import btn_manager from "./recoil/btn_manager";
const Todos = () => {
  const captalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [searchText, setSearchText] = useRecoilState(searchInput);
  const [todoApiData, setTodoApiData] = useRecoilState(todoatom);
  const [btnTracker, setBtnTracker] = useRecoilState(btn_manager);
  const [apiData, setApiData] = useRecoilState(apiDataAtom);
  return (
    <div>
      <div>
        {todoApiData
          ?.filter((filterValue) => {
            if (filterValue === "") {
              return filterValue;
            } else if (
              filterValue?.title
                ?.toLowerCase()
                .includes(searchText?.toLowerCase())
            ) {
              return filterValue;
            }
          })
          ?.map((data, index) => {
            return (
              <div key={index} className="c14">
                <div
                  className={`${
                    data?.status === "completed" ? "completed_btn" : "c13"
                  }`}
                  onClick={() => {
                    if (
                      data?.status === "in progress" ||
                      data?.status === "archived"
                    ) {
                      // console.log("in side in progress");
                      if (
                        data?.status === "in progress" &&
                        btnTracker === "all"
                      ) {
                        const completedcred = {
                          id: data?.id,
                        };
                        fetch("http://127.0.0.1:8000/completed_task", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(completedcred),
                        })
                          .then((apires) => apires.json())
                          .then((apidata) => {
                            setApiData(apidata?.[0]?.stats);
                            setTodoApiData(apidata?.[0]?.todo);
                          })
                          .catch((error) => alert(error));
                      } else if (
                        data?.status === "in progress" &&
                        btnTracker === "in progress"
                      ) {
                        const completedcred = {
                          id: data?.id,
                        };
                        fetch(
                          "http://127.0.0.1:8000/completed_task_in_progress",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(completedcred),
                          }
                        )
                          .then((apires) => apires.json())
                          .then((apidata) => {
                            setApiData(apidata?.[0]?.stats);
                            setTodoApiData(apidata?.[0]?.todo);
                          })
                          .catch((error) => alert(error));
                      } else {
                        const completedcred = {
                          id: data?.id,
                        };
                        fetch("http://127.0.0.1:8000/completed_task_archived", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(completedcred),
                        })
                          .then((apires) => apires.json())
                          .then((apidata) => {
                            setApiData(apidata?.[0]?.stats);
                            setTodoApiData(apidata?.[0]?.todo);
                          })
                          .catch((error) => alert(error));
                      }
                    } else if (data?.status == "completed")
                      if (
                        data?.status === "completed" &&
                        btnTracker === "all"
                      ) {
                        const completedcred = {
                          id: data?.id,
                        };
                        fetch("http://127.0.0.1:8000/in_progress_task", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(completedcred),
                        })
                          .then((apires) => apires.json())
                          .then((apidata) => {
                            setApiData(apidata?.[0]?.stats);
                            setTodoApiData(apidata?.[0]?.todo);
                          })
                          .catch((error) => alert(error));
                      } else if (
                        data?.status === "completed" &&
                        btnTracker === "completed"
                      ) {
                        const completedcred = {
                          id: data?.id,
                        };
                        fetch(
                          "http://127.0.0.1:8000/in_progress_task_completed",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(completedcred),
                          }
                        )
                          .then((apires) => apires.json())
                          .then((apidata) => {
                            setApiData(apidata?.[0]?.stats);
                            setTodoApiData(apidata?.[0]?.todo);
                          })
                          .catch((error) => alert(error));
                      }
                  }}
                ></div>
                <div className="c10">
                  <div className="c11">
                    <p
                      className={` ${
                        data.status === "completed" ? "title_line_through" : ""
                      } c15`}
                    >
                      &nbsp;&nbsp;{captalise(data?.title)}&nbsp;&nbsp;
                    </p>
                    <div className="icons">
                      <EditOutlinedIcon className="icon" id="edit" />
                      <ArchiveOutlinedIcon
                        className="icon"
                        id="archived"
                        onClick={() => {
                          if (
                            data?.status === "archived" &&
                            btnTracker === "archived"
                          ) {
                            const archivedcred = {
                              id: data?.id,
                            };
                            fetch(
                              "http://127.0.0.1:8000/archived_task_archived",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify(archivedcred),
                              }
                            )
                              .then((res) => res.json())
                              .then((data) => {
                                setApiData(data?.[0]?.stats);
                                setTodoApiData(data?.[0]?.todo);
                              })
                              .catch((error) => alert(error));
                          } else if (
                            data?.status === "completed" &&
                            btnTracker === "completed"
                          ) {
                            const archivedcred = {
                              id: data?.id,
                            };
                            fetch(
                              "http://127.0.0.1:8000/archived_task_completed",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify(archivedcred),
                              }
                            )
                              .then((res) => res.json())
                              .then((data) => {
                                setApiData(data?.[0]?.stats);
                                setTodoApiData(data?.[0]?.todo);
                              })
                              .catch((error) => alert(error));
                          } else if (
                            data?.status === "in progress" &&
                            btnTracker === "in progress"
                          ) {
                            const archivedcred = {
                              id: data?.id,
                            };
                            fetch(
                              "http://127.0.0.1:8000/archived_task_in_progress",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify(archivedcred),
                              }
                            )
                              .then((res) => res.json())
                              .then((data) => {
                                setApiData(data?.[0]?.stats);
                                setTodoApiData(data?.[0]?.todo);
                              })
                              .catch((error) => alert(error));
                          } else {
                            // console.log("btn was pressed");
                            const archivedcred = {
                              id: data?.id,
                            };
                            fetch("http://127.0.0.1:8000/archived_task_all", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(archivedcred),
                            })
                              .then((res) => res.json())
                              .then((data) => {
                                setApiData(data?.[0]?.stats);
                                setTodoApiData(data?.[0]?.todo);
                              })
                              .catch((error) => alert(error));
                          }
                        }}
                      />
                      <DeleteOutlinedIcon
                        className="icon"
                        id="delete"
                        onClick={() => {
                          if (
                            data?.status === "archived" &&
                            btnTracker === "archived"
                          ) {
                            const deletecred = {
                              id: data?.id,
                            };
                            fetch(
                              "http://127.0.0.1:8000/delete_task_archived",
                              {
                                method: "DELETE",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify(deletecred),
                              }
                            )
                              .then((apires) => apires.json())
                              .then((apidata) => {
                                // console.log(apidata);
                                setApiData(apidata?.[0]?.stats);
                                setTodoApiData(apidata?.[0]?.todo);
                              })
                              .catch((error) => alert(error));
                          } else if (
                            data?.status === "completed" &&
                            btnTracker === "completed"
                          ) {
                            const deletecred = {
                              id: data?.id,
                            };
                            fetch(
                              "http://127.0.0.1:8000/delete_task_completed",
                              {
                                method: "DELETE",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify(deletecred),
                              }
                            )
                              .then((apires) => apires.json())
                              .then((apidata) => {
                                // console.log(apidata);
                                setApiData(apidata?.[0]?.stats);
                                setTodoApiData(apidata?.[0]?.todo);
                              })
                              .catch((error) => alert(error));
                          } else if (
                            data?.status === "in progress" &&
                            btnTracker === "in progress"
                          ) {
                            const deletecred = {
                              id: data?.id,
                            };
                            fetch(
                              "http://127.0.0.1:8000/delete_task_in_progress",
                              {
                                method: "DELETE",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify(deletecred),
                              }
                            )
                              .then((apires) => apires.json())
                              .then((apidata) => {
                                // console.log(apidata);
                                setApiData(apidata?.[0]?.stats);
                                setTodoApiData(apidata?.[0]?.todo);
                              });
                          } else {
                            const deletecred = {
                              id: data?.id,
                            };
                            fetch("http://127.0.0.1:8000/delete_task_all", {
                              method: "DELETE",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(deletecred),
                            })
                              .then((apires) => apires.json())
                              .then((apidata) => {
                                // console.log(apidata);
                                setApiData(apidata?.[0]?.stats);
                                setTodoApiData(apidata?.[0]?.todo);
                              })
                              .catch((error) => alert(error));
                          }
                        }}
                      />
                    </div>
                  </div>
                  <p className="c12">{data?.desc}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Todos;
