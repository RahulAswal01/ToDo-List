import React, { useState } from "react";
import { useEffect } from "react";
import todoatom from "./recoil/todoatom";
import apiDataAtom from "./recoil/apiDataAtom";
import { useRecoilState } from "recoil";
import { filterMap } from "./helper/filtermap";

const Filter = () => {
  const [apiData, setApiData] = useRecoilState(apiDataAtom);
  const [activeFilter, setActiveFilter] = useState("all");
  const [todoApiData, setTodoApiData] = useRecoilState(todoatom);
  const captalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  useEffect(() => {
    console.log(activeFilter);
  }, [activeFilter]);
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
                  .then((data) => {
                    console.log(data);
                    if (filterMap[index]?.endpoints === "inital_call") {
                      setTodoApiData(data[0]?.todo);
                    } else {
                      setTodoApiData(data?.data);
                    }
                  })
                  .catch((error) => alert(error));
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
