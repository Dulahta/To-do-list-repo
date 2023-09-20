import React from "react";

const DisplayData = ({ data, handleClikNavigate, handleClickDelete, sign }) => {
  return (
    <blockquote onClick={() => handleClikNavigate()} className="contentLists">
      <p className="data--paragraph">
        {data.title}
        <button onClick={() => handleClickDelete()} className="delete--button">
          <img width="24" height="24" src={sign} alt="sign" />
        </button>
      </p>
    </blockquote>
  );
};

export default DisplayData;
