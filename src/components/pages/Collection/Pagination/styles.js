import styled from "styled-components";
import Container from "components/shared/Container";
import Button from "components/shared/Button";

export const PaginationMain = styled.div`
    display: ${({ pageCount }) => (pageCount ? "block" : "none")};
`;

export const PaginationContainer = styled(Container)`
    padding: 1rem 0 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PageButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Prev = styled(PageButton)`
    visibility: ${({ pageCount }) => (pageCount === 1 ? "hidden" : "visible")};
`;

export const Next = styled(PageButton)`
    visibility: ${({ pageLimit, pageCount }) =>
        pageCount < pageLimit ? "visible" : "hidden"};
`;

