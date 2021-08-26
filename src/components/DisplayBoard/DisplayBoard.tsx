import React from "react";

const DisplayBoard = () => {
  return (
    <div className="display-board">
      <h4>Users Craete</h4>
      <div className="number">0</div>
      <div className="btn">
        <button type="button" className="btn btn-warning">
          Get all User
        </button>
      </div>
    </div>
  );
};

export default DisplayBoard;
