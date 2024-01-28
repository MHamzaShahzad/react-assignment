import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPersonDetails, resetPersonDetails } from "../../redux/actions";
import HomeworldModal from "../Modals/HomeworldModal";
import SpeciesModal from "../Modals/SpeciesModal";
import StarshipsModal from "../Modals/StarshipsModal";
import FilmsModal from "../Modals/FilmsModal";
import LoadingSpinner from "../common/LoadingSpinner";

function PersonDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [homeworldModalOpen, setHomeworldModalOpen] = useState(false);
  const [speciesModalOpen, setSpeciesModalOpen] = useState(false);
  const [starshipsModalOpen, setStarshipsModalOpen] = useState(false);
  const [filmsModalOpen, setFilmsModalOpen] = useState(false);

  const selectedPerson = useSelector((state) => state.selectedPerson.details);

  useEffect(() => {
    dispatch(resetPersonDetails());
    dispatch(fetchPersonDetails(id));
  }, [dispatch, id]);

  const openHomeworldModal = () => {
    setHomeworldModalOpen(true);
  };

  const closeHomeworldModal = () => {
    setHomeworldModalOpen(false);
  };

  const openSpeciesModal = () => {
    setSpeciesModalOpen(true);
  };

  const closeSpeciesModal = () => {
    setSpeciesModalOpen(false);
  };

  const openStarshipsModal = () => {
    setStarshipsModalOpen(true);
  };

  const closeStarshipsModal = () => {
    setStarshipsModalOpen(false);
  };

  const openFilmsModal = () => {
    setFilmsModalOpen(true);
  };

  const closeFilmsModal = () => {
    setFilmsModalOpen(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Person Details</h2>
      {selectedPerson ? (
        <div className="row">
          <div className="col-md-8">
            <p>
              <strong>Name:</strong> {selectedPerson.name}
            </p>
            <p>
              <strong>Height:</strong> {selectedPerson.height}
            </p>
            <p>
              <strong>Mass:</strong> {selectedPerson.mass}
            </p>
            <p>
              <strong>Hair Color:</strong> {selectedPerson.hair_color}
            </p>
            <p>
              <strong>Skin Color:</strong> {selectedPerson.skin_color}
            </p>
            <p>
              <strong>Eye Color:</strong> {selectedPerson.eye_color}
            </p>
            <p>
              <strong>Birth Year:</strong> {selectedPerson.birth_year}
            </p>
            <p>
              <strong>Gender:</strong> {selectedPerson.gender}
            </p>
          </div>
          <div className="row mt-3">
            <div className="col-md-8">
              {selectedPerson.homeworld && (
                <button
                  className="btn btn-primary me-2"
                  onClick={openHomeworldModal}
                >
                  View Homeworld
                </button>
              )}
              {selectedPerson.species?.length > 0 && (
                <button
                  className="btn btn-primary me-2"
                  onClick={openSpeciesModal}
                >
                  View Species
                </button>
              )}
              {selectedPerson.starships?.length > 0 && (
                <button
                  className="btn btn-primary me-2"
                  onClick={openStarshipsModal}
                >
                  View Starships
                </button>
              )}
              {selectedPerson.films?.length > 0 && (
                <button className="btn btn-primary" onClick={openFilmsModal}>
                  View Films
                </button>
              )}
            </div>
          </div>

          <HomeworldModal
            isOpen={homeworldModalOpen}
            closeModal={closeHomeworldModal}
            homeworldUrl={selectedPerson.homeworld}
          />

          <SpeciesModal
            isOpen={speciesModalOpen}
            closeModal={closeSpeciesModal}
            speciesUrls={selectedPerson.species}
          />

          <StarshipsModal
            isOpen={starshipsModalOpen}
            closeModal={closeStarshipsModal}
            starshipsUrls={selectedPerson.starships}
          />

          <FilmsModal
            isOpen={filmsModalOpen}
            closeModal={closeFilmsModal}
            filmsUrls={selectedPerson.films}
          />
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default PersonDetail;
