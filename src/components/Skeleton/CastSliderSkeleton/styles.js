import styled from "styled-components";
import respondTo from "../../../util/respondTo";
import { blink } from "../../../assets/animations";

export const SliderBody = styled.div`
    overflow: hidden;
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    width: 90%;
    margin: 2.5rem auto;
    animation: ${blink} var(--loader-speed);
`;

export const SampleSlide = styled.div`
    width: 200px;
    height: 300px;
    border-radius: 20px;
    background: var(--main-mid);

    ${respondTo.sm`
        width:150px;
        height:230px;
    `}
    ${respondTo.cp`
        width:120px;
        height:200px;
    `}
    
`;
