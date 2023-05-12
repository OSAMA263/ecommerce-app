import React from "react";

export default function Pagination({
  totalItems,
  itemsPerPage,
  setCurrentPage,CurrentPage
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      {pages.map((page, i) => (
        <button className={`btn ${page===CurrentPage?"btn-dark":"btn-secondary"}`}
          onClick={() => {
            setCurrentPage(page);
          }}
          key={i}
        >
          {page}
        </button>
      ))}
    </>
  );
}
