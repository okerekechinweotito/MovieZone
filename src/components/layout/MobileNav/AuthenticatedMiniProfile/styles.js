import styled from "styled-components";

export const Holder = styled.div`
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    align-items:center;
    flex-direction:column;
`;

export const Title = styled.h3`
    letter-spacing: 3px;
    font-weight:normal;
    text-transform: uppercase;
    margin-bottom:0.5rem;
`;

export const GoTo = styled.p`
    color:inherit;
    padding: 0.7rem 1rem;
    width: auto;
    font-size:14px;
    cursor:pointer;
    &:hover{
        color:var(-main-color);
    }
`