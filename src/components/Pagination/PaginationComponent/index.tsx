import {
  ButtonsContainer,
  Container,
  PaginationButton,
  PaginationDivider,
} from "./styles";

export interface PaginationComponentProps {
  page: number;
  totalPages: number;
  handlePagination: (updatePage: number) => void;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = (
  props
) => {
  const { handlePagination = () => null, page = 1, totalPages = 15 } = props;
  return (
    <Container>
      <ButtonsContainer>
        <PaginationButton
          onClick={() => handlePagination(page - 1)}
          type="button"
          disabled={page === 1}
        >
          &lt;
        </PaginationButton>
        <PaginationButton onClick={() => handlePagination(1)} type="button">
          {1}
        </PaginationButton>
        <PaginationDivider>...</PaginationDivider>
        {page > 1 && (
          <PaginationButton
            onClick={() => handlePagination(page - 1)}
            type="button"
          >
            {page - 1}
          </PaginationButton>
        )}
        <PaginationButton
          onClick={() => handlePagination(page)}
          type="button"
          style={{ backgroundColor: "#6933ff" }}
        >
          {page}
        </PaginationButton>
        {page < 42 && (
          <PaginationButton
            onClick={() => handlePagination(page + 1)}
            type="button"
          >
            {page + 1}
          </PaginationButton>
        )}
        <PaginationDivider>...</PaginationDivider>
        <PaginationButton
          onClick={() => handlePagination(totalPages)}
          type="button"
        >
          {totalPages}
        </PaginationButton>
        <PaginationButton
          onClick={() => handlePagination(page + 1)}
          type="button"
          disabled={page === totalPages}
        >
          &gt;
        </PaginationButton>
      </ButtonsContainer>
    </Container>
  );
};
