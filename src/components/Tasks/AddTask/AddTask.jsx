import React, { useState } from "react";
import plusSign from "../../../assets/PlusCircle.svg";
import Modal from "../../Modal/Modal";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../../Navigation/Navigation";

const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    const insertTask = {
      title,
    };
    fetch(`http://localhost:8000/lists/${id}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(insertTask),
    }).then(() => {
      console.log("new task added");
      navigate(0);
    });
  };

  return (
    <>
      <Navigation
        title="TO DO | YOUR TASKS"
        handleClickTitle={() => navigate("/lists")}
        handleClickAction={() => setIsOpen(true)}
        sign={plusSign}
        pageName="Add new Task"
      />
      {isOpen && (
        <Modal
          modalName="Task"
          setIsOpen={setIsOpen}
          title={title}
          setTitle={setTitle}
          placeholderText="Insert your task"
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default AddTask;
