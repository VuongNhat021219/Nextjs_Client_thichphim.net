// components/PaginationComponent.js
import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
const PaginationComponent = ({ hrefPage, totalPages, visiblePages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleOnClick = (event) => {
    const selectedPage = Number(event.target.textContent);
    setCurrentPage(selectedPage);
    // Gọi hàm xử lý với trang mới tại đây, ví dụ: fetchDataForPage(selectedPage);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    const maxPage = Math.min(
      totalPages,
      currentPage + Math.floor(visiblePages / 6)
    );

    for (
      let page = Math.max(1, maxPage - visiblePages + 1);
      page <= maxPage;
      page++
    ) {
      paginationItems.push(
        <Pagination.Item
          key={page}
          onClick={handleOnClick}
          active={page === currentPage}
          href={`${hrefPage}${page}`}
        >
          {page}
        </Pagination.Item>
      );
    }

    return paginationItems;
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => setCurrentPage(1)} />
      <Pagination.Prev
        onClick={() =>
          setCurrentPage(currentPage - Math.floor(visiblePages / 2))
        }
      />
      {renderPaginationItems()}
      <Pagination.Ellipsis />
      <Pagination.Item onClick={() => setCurrentPage(totalPages)}>
        {totalPages}
      </Pagination.Item>
      <Pagination.Next
        onClick={() =>
          setCurrentPage(currentPage + Math.floor(visiblePages / 2))
        }
      />
      <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
    </Pagination>
  );
};

export default PaginationComponent;
