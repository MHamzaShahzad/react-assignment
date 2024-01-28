import React from "react";
import GenericModal from "../common/GenericModal";

const StarshipsModal = ({ isOpen, closeModal, starshipsUrls }) => {

  const renderStarshipDetails = (starship) => (
    <>
      <h3>{starship.name}</h3>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>MGLT:</strong> {starship.MGLT}</p>
      <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</p>
      <p><strong>Consumables:</strong> {starship.consumables}</p>
      <p><strong>Cost In Credits:</strong> {starship.cost_in_credits}</p>
      <p><strong>Crew:</strong> {starship.crew}</p>
      <p><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</p>    
      <p><strong>Length:</strong> {starship.length}</p>
      <p><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</p>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Passengers:</strong> {starship.passengers}</p>
      <p><strong>Starship Class:</strong> {starship.starship_class}</p>
      <br></br>
    </>
  );

  return (
    <GenericModal
      isOpen={isOpen}
      closeModal={closeModal}
      dataUrls={starshipsUrls}
      entity="starships"
      title="Starships"
      renderDetails={renderStarshipDetails}
    />
  );
};

export default StarshipsModal;