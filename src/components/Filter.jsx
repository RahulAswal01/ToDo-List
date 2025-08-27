import React, { useState } from "react";
import { useEffect } from "react";
import todoatom from "./recoil/todoatom";
import apiDataAtom from "./recoil/apiDataAtom";
import { useRecoilState } from "recoil";
import { filterMap } from "./helper/filtermap";

const Filter = () => {
  const [apiData, setApiData] = useRecoilState(apiDataAtom);
  const [activeFilter, setActiveFilter] = useState("all");
  const captalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  useEffect(() => {
    console.log(activeFilter);
  }, [activeFilter]);
  const filterChangeHandler = () => {
    console.log("hello");
  };
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
                filterChangeHandler();
                setActiveFilter(data?.label);
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
