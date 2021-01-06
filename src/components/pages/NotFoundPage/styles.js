import styled from "styled-components";

export const Main = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    align-content:center;
    gap:2rem;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    z-index:10000000000000000000000000000;
    background:var(--main-dark);
    padding:0 3rem;
`;

export const Image = styled.img`
    width: 100%;
    max-width:400px;
    display: block;
`;

export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    text-shadow: 3px 5px 0 var(--main-dark-5);
`;
