import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../useFetch/useFetch";
import AddList from "./AddList/AddList.jsx";
import deleteSign from "../../assets/delete-sign.png";
import DisplayData from "../DisplayData/DisplayData";

const Lists = () => {
  const navigate = useNavigate();
  const { data: lists } = useFetch("http://localhost:8000/lists/");
  const apiUrl = "http://localhost:8000/lists/";

  const handleClickDelete = (id) => {
    console.log(id);
    fetch(apiUrl + id, {
      method: "DELETE",
    }).then(() => {
      console.log("list deleted");
      navigate("/lists");
    });
  };

  return (
    <>
      <AddList />
      <div className="list">
        {lists?.map((item) => (
          <DisplayData
            key={item.id}
            data={item}
            handleClikNavigate={() => navigate(`/lists/${item.id}/tasks`)}
            handleClickDelete={() => handleClickDelete(item.id)}
            sign={deleteSign}
          />
        ))}
      </div>
    </>
  );
};

export default Lists;
