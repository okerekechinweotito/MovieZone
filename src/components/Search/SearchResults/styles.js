import styled from "styled-components";
import respondTo from "util/respondTo";

export const Results = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: ${({ isEmpty }) => (isEmpty ? "max-content" : "300px")};
    overflow-y: ${({ isEmpty }) => (isEmpty ? "unset" : "scroll")};
    overflow-x: hidden;
    display: grid;
    padding: 5px;
    background: var(--main-dark);
    display: ${({ isShowing }) => (isShowing ? "block" : "none")};

    ${respondTo.md`
        display:none;
        // z-index:100;
        // border:1px solid var(--main-color);
        // border-top:3px solid var(--main-dark);
    `}
`;

export const Title = styled.h3`
    text-align: center;
    padding: 5px;
    border-bottom: 1px solid white;
`;

export const SubTitle = styled(Title)`
    border-bottom: none;
`;

