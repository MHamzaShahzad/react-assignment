import React from "react";

const ModalItemsCard = ({ details }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">{details.title}</div>
      <div className="card-body">
      <div>
      {Object.entries(details).map(([key, value]) => (
        <div key={key}>
          {typeof value !== "object" ? (
            <>
              <strong>{key}:</strong> {value}
              <br />
            </>
          ) : null}
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default ModalItemsCard;
