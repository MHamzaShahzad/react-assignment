import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPeople } from "../../redux/actions.js";
import PersonCard from "../common/PersonCard.js";
import LoadingSpinner from "../common/LoadingSpinner.js";
import Pagination from "../common/Pagination"; // Adjust the path as needed

function PeopleList() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.people.currentPage);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const page =
        parseInt(new URLSearchParams(location.search).get("page")) || 1;
      await dispatch(fetchPeople(page));
    };
    fetchData();
  }, [dispatch, location.search]);

  const people = useSelector((state) => state.people.list);
  const totalCount = useSelector((state) => state.people.count);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const isLoading = useSelector((state) => !state.people.list.length);

  const handlePageChange = async (newPage) => {
    navigate(`/?page=${newPage}`);
    dispatch(fetchPeople(newPage));
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    handlePageChange(nextPage);
  };

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1 <= 0 ? 1 : currentPage - 1;
    handlePageChange(previousPage);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">People List</h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="row">
            {people.map((person) => (
              <div key={person.url} className="col-md-4 mb-4">
                <PersonCard person={person} currentPage={currentPage} />
              </div>
            ))}
          </div>
          <div className="row mt-3">
            <div className="col-md-3 mb-2">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                onNext={handleNextPage}
                onPrevious={handlePreviousPage}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PeopleList;