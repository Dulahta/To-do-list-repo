import React from "react";

const Navigation = ({
  title,
  handleClickTitle,
  handleClickAction,
  sign,
  pageName,
}) => {
  return (
    <nav>
      <h4 onClick={() => handleClickTitle()} className="nav--title">
        {title}
      </h4>

      <button onClick={() => handleClickAction()} className="nav--button">
        <img
          width="30"
          height="30"
          src={sign}
          alt="sign"
          className="nav--icon"
        />

        {pageName}
      </button>
    </nav>
  );
};

export default Navigation;
