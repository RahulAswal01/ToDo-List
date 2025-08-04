import React from "react";

const Filter = (props) => {
  const captalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="c07">
      {props?.apiData?.status?.map((data, index) => {
        return (
          <div key={index} className="c09">
            <button className="c08">
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
