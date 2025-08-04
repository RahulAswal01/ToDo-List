import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
const Todos = (props) => {
  const captalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div>
      <div>
        {props?.apiData?.map((data, index) => {
          return (
            <div key={index} className="c14">
              <div className="c13"></div>
              <div className="c10">
                <div className="c11">
                  <p className="c15">
                    &nbsp;&nbsp;{captalise(data?.title)}&nbsp;&nbsp;
                  </p>
                  <div className="icons">
                    <EditOutlinedIcon className="icon" id="edit" />
                    <ArchiveOutlinedIcon className="icon" id="archived" />
                    <DeleteOutlinedIcon className="icon" id="delete" />
                  </div>
                </div>
                <p className="c12">{data?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
