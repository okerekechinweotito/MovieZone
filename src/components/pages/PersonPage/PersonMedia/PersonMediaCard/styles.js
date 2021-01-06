import styled from "styled-components";
import respondTo from 'util/respondTo';

const Card = styled.figure`
    display: grid;
    grid-template-columns: auto 1fr;
    background: var(--main-dark-5);
    border-right: 5px solid var(--main-color);

    ${respondTo.sm`
            grid-template-columns:1fr;
            justify-items:center;
            padding:2rem 0;
    `}
`;

const Poster = styled.img`
    display: block;
    width: 200px;
    height: 300px;
`;

const Title = styled.h3``;

const Role = styled.p`
    font-weight: bold;
    span {
        font-weight: normal;
        display: inline-block;
        margin-left: 5px;
    }
`;

const Overview = styled.p``;

const Content = styled.div`
    padding: 1rem 1.5rem;
    display: grid;
    gap: 1rem;
    align-content: start;
`;

const Sub = styled.div`
    width: 200px;
    height: 300px;
    background: var(--main-mid-2);
    display: grid;
    place-items: center;
    font-size: 11px;
    color:var(--main-color);
`;

export { Card, Poster, Title, Role, Overview, Content, Sub };
