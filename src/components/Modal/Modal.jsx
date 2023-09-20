import React from "react";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({
  modalName,
  setIsOpen,
  title,
  setTitle,
  placeholderText,
  handleClick,
}) => {
  return (
    <>
      <div className="modalContainer" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{modalName}</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div>
            <input
              type="text"
              className="modalContent"
              required
              placeholder={placeholderText}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button className="validateBtn" onClick={() => handleClick()}>
                Validate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
