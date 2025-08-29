import React, { useState } from "react";
import { useEffect } from "react";
import todoatom from "./recoil/todoatom";
import apiDataAtom from "./recoil/apiDataAtom";
import { useRecoilState } from "recoil";
import { filterMap } from "./helper/filtermap";
import btn_manager from "./recoil/btn_manager";

const Filter = () => {
  const [apiData, setApiData] = useRecoilState(apiDataAtom);
  const [btnTracker, setBtnTracker] = useRecoilState(btn_manager);
  const [activeFilter, setActiveFilter] = useState("all");
  const [todoApiData, setTodoApiData] = useRecoilState(todoatom);
  const captalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  useEffect(() => {}, [activeFilter]);
  return (
    <div className="c07">
      {apiData?.map((data, index) => {
        return (
          <div key={index} className="c09">
            <button
              className={`c08 ${
                activeFilter === data?.label ? "activeclass" : ""
              }`}
              onClick={() => {
                setActiveFilter(data?.label);
                fetch("http://127.0.0.1:8000/" + filterMap[index]?.endpoints, {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => res.json())
                  .then((apidata) => {
                    if (filterMap[index]?.endpoints === "inital_call") {
                      // console.log(apidata);
                      setApiData(apidata[0]?.stats);
                      setTodoApiData(apidata[0]?.todo);
                    } else {
                      // console.log(apidata);
                      setApiData(apidata[0]?.stats);
                      setTodoApiData(apidata[0]?.todo);
                    }
                  })
                  .catch((error) => alert(error));
                // console.log(data?.label);
                setBtnTracker(data?.label);
              }}
            >
              <h3>{captalise(data?.label)}</h3>
              <div>{data?.value}</div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
