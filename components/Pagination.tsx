import React from "react";
import Button from "./Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginationProps {
  page: number;
  maxPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, maxPages }) => {
  return (
    <div className="flex gap-x-2">
      <Button
        disabled={page <= 1}
        leftIcon={FaAngleLeft}
        iconSpacing={2}
        asLink
        href={`/${page > 2 ? `?page=${page - 1}` : ""}#movies`}
      >
        Prev
      </Button>
      <Button
        disabled={page >= maxPages}
        rightIcon={FaAngleRight}
        iconSpacing={2}
        asLink
        href={`/?page=${page + 1}#movies`}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
