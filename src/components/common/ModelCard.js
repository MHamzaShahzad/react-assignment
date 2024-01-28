import React from "react";
import PropTypes from "prop-types";

const ModalCard = ({ title, onClose, children }) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onClose}
          style={{ marginLeft: "auto" }}
        >
          Close
        </button>
      </div>
      <div className="modal-body">{children}</div>
    </div>
  );
};

ModalCard.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalCard;