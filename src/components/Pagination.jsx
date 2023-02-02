import PageButton from "./PageBtn/PageButton";
import "../components/Pagination.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(10);

  return (
    <div>
      <Link to={`/page/${currentPage - 1}`}>
        <PageButton btnName={currentPage - 1} btnClass={"pageBtn"} />
      </Link>

      <span>
        <Link to={`/page/${currentPage}`}>
          <PageButton btnName={currentPage} btnClass={"pageBtn-active"} />
        </Link>
      </span>

      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <PageButton btnName={currentPage + 1} btnClass={"pageBtn"} />
      </Link>
    </div>
  );
}
