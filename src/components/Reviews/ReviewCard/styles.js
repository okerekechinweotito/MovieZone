import styled from "styled-components";
import respondTo from 'util/respondTo';

export const Card = styled.figure`
    padding: 2.5rem 2rem;
    position: relative;
    background: var(--main-dark-5);

    &:hover {
        outline: 10px solid var(--main-color);
    }

    ${respondTo.md`
        &:hover{
            outline:none;
        }
    `}
`;

export const ReviewText = styled.p`
    line-height: 1.4;
    margin-bottom: 1rem;
    padding-left:2rem;

    &::before {
        content: open-quote;
        position: absolute;
        font-size: 7rem;
        top: 0;
        left: 8px;
        line-height: 1;
        font-family: sans-serif;
    }

    &::after {
        content: close-quote;
    }
`;

export const Author = styled.p`
    text-align: right;
    color: var(--main-color);
`;

