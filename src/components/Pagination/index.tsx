import { PaginationComponent } from "./PaginationComponent";

interface PaginationProps {
  page: number;
  totalPages: number;
  handlePages: (updatePage: number) => void;
}

export const Pagination = ({
  page,
  totalPages,
  handlePages,
}: PaginationProps) => {
  return (
    <div className="container">
      <PaginationComponent
        page={page}
        totalPages={totalPages}
        handlePagination={handlePages}
      />
    </div>
  );
};
