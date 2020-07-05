import React from "react";

const Card = ({ district, state, zone, handleResetSearch }) => {
  return (
    <>
      <div className={`card mt-4 ${zone}`} style={{ minWidth: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title font-weight-bolder">
            Zone Inforamtion of {district}
          </h5>
          <h6 className="card-subtitle mb-2 my-2 font-weight-bolder">
            State:{state}
          </h6>
          <div className="card-text mt-4 font-weight-bolder">
            zone:
            <span className={`rounded-circle  ml-2 ${zone}_fill`}></span>
          </div>
          {zone === "Red" ? (
            <p> Pay Extra attention to your safty</p>
          ) : zone === "Orange" ? (
            <p>Pay attention to your safty</p>
          ) : (
            <p>Stay Safe</p>
          )}
        </div>
      </div>
      <button onClick={handleResetSearch} className="btn btn-secondary mt-3">
        {" "}
        Rest
      </button>
    </>
  );
};

export default Card;
