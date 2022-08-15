import React from "react";

interface IArrow {
  onClickHandler: () => void;
}

function Arrow({ onClickHandler }: IArrow) {
  return (
    <div>
      <button type="button" onClick={onClickHandler}>
        <i className="bi bi-arrow-left-circle-fill" />
      </button>
    </div>
  );
}

export default Arrow;
