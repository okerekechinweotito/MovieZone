import styled from "styled-components";
import  { blink } from 'assets/animations';
import  respondTo from 'util/respondTo';


export const SeasonBody = styled.div`
    width: 90%;
    margin: 3rem auto;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:5rem;
    animation:${blink} var(--loader-speed);
    justify-items:center;

    ${respondTo.sm`
        grid-template-columns:1fr;
        figure{
            display:none;
        }
    `}
`;

export const SeasonSample = styled.div`
    width: 80%;
    height: 250px;
    background: var(--main-mid);

    ${respondTo.sm`
        width:200px;
        height:300px;
    `}
`;


