import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import searchInput from "./recoil/searchInput";
import { useRecoilState } from "recoil";
import todoatom from "./recoil/todoatom";
const Todos = () => {
  const captalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [searchText, setSearchText] = useRecoilState(searchInput);
  const [todoApiData, setTodoApiData] = useRecoilState(todoatom);
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
