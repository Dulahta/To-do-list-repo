import React, { useState } from "react";
import plusSign from "../../../assets/PlusCircle.svg";
import Modal from "../../Modal/Modal";
import Navigation from "../../Navigation/Navigation";
import { useNavigate } from "react-router-dom";

const AddList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    const list = {
      title: title,
    };
    fetch("http://localhost:8000/lists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(list),
    }).then(() => {
      console.log("new list added");
      navigate(0);
    });
  };

  return (
    <>
      <Navigation
        title="TO DO | YOUR LISTS"
        handleClickTitle={() => navigate(0)}
        handleClickAction={() => setIsOpen(true)}
        sign={plusSign}
        pageName="Add new List"
      />
      {isOpen && (
        <Modal
          modalName="List"
          setIsOpen={setIsOpen}
          title={title}
          setTitle={setTitle}
          placeholderText="Insert your title list"
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default AddList;
