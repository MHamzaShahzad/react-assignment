import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHomeworld,
  fetchSpecies,
  fetchStarships,
  fetchFilms,
} from "../../redux/actions";
import LoadingSpinner from "./LoadingSpinner";
import ModalCard from "./ModelCard";
import ModalItemsCard from "./ModalItemsCard";

const GenericModal = ({
  isOpen,
  closeModal,
  dataUrls,
  entity,
  title,
  renderDetails,
}) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state[entity].data);
  const isLoading = useSelector((state) => !state[entity].data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (dataUrls && dataUrls.length > 0) {
          // Use the appropriate action based on the entity
          switch (entity) {
            case "homeworld":
              await dispatch(fetchHomeworld(dataUrls[0]));
              break;
            case "species":
              await dispatch(fetchSpecies(dataUrls));
              break;
            case "starships":
              await dispatch(fetchStarships(dataUrls));
              break;
            case "films":
              await dispatch(fetchFilms(dataUrls));
              break;
            // Add more cases for other entities if needed
            default:
              break;
          }
        }
      } catch (error) {
        console.error(`Error fetching ${entity} data:`, error.message);
      }
    };

    fetchData();
  }, [dataUrls, entity, dispatch]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={`${title} Modal`}
    >
      <ModalCard title={title} onClose={closeModal}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {data == null || (Array.isArray(data) && data.length === 0) ? (
              <p>No {title.toLowerCase()} information available.</p>
            ) : Array.isArray(data) ? (
              data.map((item) => (
                // <ModalItemsCard
                //   key={item.url}
                //   details={item}
                // />
                <div key={item.url}>{renderDetails(item)}</div>
              ))
            ) : (
              <div>
                {
                  // <ModalItemsCard
                  //   key={data.url}
                  //   details={data}
                  // />
                  renderDetails(data)
                }
              </div>
            )}
          </div>
        )}
      </ModalCard>
    </Modal>
  );
};

export default GenericModal;
