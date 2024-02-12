import React from "react";

const PaginationControl = ({
  handleNextPage,
  handlePreviousPage,
  currentPage,
  totalPages,
}) => {
  return (
    <div className="pagination">
      <button
        className="btn"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <p>
        {currentPage} of {totalPages}
      </p>
      <button
        className="btn"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControl;
