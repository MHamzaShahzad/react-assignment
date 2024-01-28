import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNext = () => {
    const nextPage = currentPage + 1;
    onPageChange(nextPage);
  };

  const handlePrevious = () => {
    const previousPage = currentPage - 1 <= 0 ? 1 : currentPage - 1;
    onPageChange(previousPage);
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={handlePrevious}>
            Previous
          </button>
        </li>
        {[...Array(totalPages).keys()].map((page) => (
          <li
            key={page + 1}
            className={`page-item ${currentPage === page + 1 ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => onPageChange(page + 1)}>
              {page + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={handleNext}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;