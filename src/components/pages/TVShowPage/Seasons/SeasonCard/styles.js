import styled from "styled-components";
import respondTo from "util/respondTo";

export const Card = styled.figure`
    background: var(--main-dark-5);
    width: 500px;
    display: flex;
    position: relative;
    ${respondTo.md`
        width:220px;

        &:hover div{
            opacity:1;
        }
    `}

    ${respondTo.sm`
        margin:0 auto;
    `}
`;

export const CardPoster = styled.img`
    height: 300px;
    display: block;
    ${respondTo.md`
        width:100%;
    `}
`;

export const Placeholder = styled.div`
    height:300px;
    width:200px;
    background:var(-main-dark-3);
    display:grid;
    place-items:center;
    border:1px solid var(--main-mid-2);
`;

export const CardContent = styled.div`
    padding: 1rem;
    ${respondTo.md`
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        opacity:0;
        background:var(--main-dark-2);
        text-align:center;
        padding:0.5rem;
        display:grid;
        align-content:center;
        transition:300ms;
    `}
`;

export const CardTitle = styled.h3`
    text-align: center;
    margin-bottom: 1rem;
    font-weight: bold;
    letter-spacing: 2px;
`;

export const CardDesc = styled.p`
    font-size: 0.8rem;
    margin-top: 1rem;
    ${respondTo.md`
        width:90%;
        margin:0 auto;
    `}
`;

export const Item = styled.p`
    font-weight: 600;

    ${respondTo.md`
        font-size:0.8rem;
    `}

    span {
        display: inline-block;
        margin-left: 5px;
        font-weight: normal;
    }
`;
