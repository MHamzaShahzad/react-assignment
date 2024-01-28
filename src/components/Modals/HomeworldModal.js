import React from "react";
import GenericModal from "../common/GenericModal";

const HomeworldModal = ({ isOpen, closeModal, homeworldUrl }) => {

  const renderDetails = (homeworld) => (
    <>
      <p><strong>Name:</strong> {homeworld.name}</p>
      <p><strong>Rotation Period:</strong> {homeworld.rotation_period}</p>
      <p><strong>Orbital Period:</strong> {homeworld.orbital_period}</p>
      <p><strong>Climate:</strong> {homeworld.climate}</p>
      <p><strong>Terrain:</strong> {homeworld.terrain}</p>
      <p><strong>Diameter:</strong> {homeworld.diameter}</p>
      <p><strong>Gravity:</strong> {homeworld.gravity}</p>
      <p><strong>Population:</strong> {homeworld.population}</p>
      <p><strong>Surface Water:</strong> {homeworld.surface_water}</p>
    </>
  );

  return (
    <GenericModal
      isOpen={isOpen}
      closeModal={closeModal}
      dataUrls={[homeworldUrl]}
      entity="homeworld"
      title="Homeworld Information"
      renderDetails={renderDetails}
    />
  );
};

export default HomeworldModal;