import styled from "styled-components";

// EMPTY REVIEWS

export const EmptyBody = styled.div`
    display:grid;
    justify-items:center;
    gap:1rem;
    padding:1rem;
    width:max-content;
    margin:auto;
`;

export const EmptyIcon = styled.svg`
    width: 200px;
    height:200px;
    display: block;
    fill:var(--main-color)
`;

export const EmptyTitle = styled.h2`
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 3px;
    font-weight: normal;
    text-transform:uppercase;
`;
