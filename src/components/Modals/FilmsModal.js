import React from "react";
import GenericModal from "../common/GenericModal";

const FilmsModal = ({ isOpen, closeModal, filmsUrls }) => {

  const renderFilmDetails = (film) => (
    <>
      <h3>{film.title}</h3>
      <p><strong>Producer:</strong> {film.producer}</p>
      <p><strong>Director:</strong> {film.director}</p>
      <p><strong>Opening Crawl:</strong> {film.opening_crawl}</p>
      <p><strong>Release Date:</strong> {film.release_date}</p>
    </>
  );

  return (
    <GenericModal
      isOpen={isOpen}
      closeModal={closeModal}
      dataUrls={filmsUrls}
      entity="films"
      title="Films"
      renderDetails={renderFilmDetails}
    />
  );
};

export default FilmsModal;