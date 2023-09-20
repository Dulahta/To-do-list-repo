import React from "react";
import { useNavigate } from "react-router-dom";
import listsSign from "./../../assets/lists.png";
import Navigation from "../Navigation/Navigation";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navigation
        title="TO DO | YOUR LISTS"
        handleClickTitle={() => navigate("/lists")}
        handleClickAction={() => navigate("/lists")}
        sign={listsSign}
        pageName="Lists"
      />
      <div className="container">
        <div className="border">
          <h4>TO-DO LIST</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
