import React from "react";
import GenericModal from "../common/GenericModal";

const SpeciesModal = ({ isOpen, closeModal, speciesUrls }) => {

  const renderSpeciesDetails = (specie) => (
    <>
      <p><strong>Name:</strong> {specie.name}</p>
      <p><strong>Classification:</strong> {specie.classification}</p>
      <p><strong>Designation:</strong> {specie.designation}</p>
      <p><strong>Average Height:</strong> {specie.average_height}</p>
      <p><strong>Average Lifespan:</strong> {specie.average_lifespan}</p>
      <p><strong>Eye Colors:</strong> {specie.eye_colors}</p>
      <p><strong>Hair Colors:</strong> {specie.hair_colors}</p>
      <p><strong>Language:</strong> {specie.language}</p>
      <p><strong>Skin Colors:</strong> {specie.skin_colors}</p>
    </>
  );

  return (
    <GenericModal
      isOpen={isOpen}
      closeModal={closeModal}
      dataUrls={speciesUrls}
      entity="species"
      title="Species"
      renderDetails={renderSpeciesDetails}
    />
  );
};

export default SpeciesModal;