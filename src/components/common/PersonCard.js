import React from "react";
import { Link } from "react-router-dom";

const PersonCard = ({ person, currentPage }) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    url,
  } = person;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Height: {height}</p>
        <p className="card-text">Mass: {mass}</p>
        <p className="card-text">Hair Color: {hair_color}</p>
        <p className="card-text">Skin Color: {skin_color}</p>
        <p className="card-text">Eye Color: {eye_color}</p>
        <p className="card-text">Birth Year: {birth_year}</p>
        <p className="card-text">Gender: {gender}</p>
        <Link
          className="btn btn-primary"
          to={{
            pathname: `/person/${url.split("/").reverse()[1]}`,
            state: { currentPage },
          }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PersonCard;
