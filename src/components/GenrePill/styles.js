import styled from "styled-components";

export const Pill = styled.span`
    display: inline-block;
    width: max-content;
    padding: 0.3em 0.6em;
    margin: 7px 7px 7px 0;
    background-color: var(--main-color);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    &:hover {
        background-color: var(--main-color-2);
    }
`;
