import styled from "styled-components";
import { blink } from "assets/animations";
import respondTo from 'util/respondTo'

export const SampleTitle = styled.h3`
    width: 200px;
    height: 30px;
    background: var(--main-mid);
    margin-bottom: 1rem;
    animation: ${blink} var(--loader-speed);
`;

export const SampleSlider = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
    animation: ${blink} var(--loader-speed);

    ${respondTo.md`
        & div:nth-child(3n){
            display:none;
        }
    `}
    ${respondTo.sm`
        & div:nth-child(2n){
            display:none;
        }
    `}
`;

export const SampleSlide = styled.div`
    width: 100%;
    height: 15rem;
    background: var(--main-mid);
    border-radius: 1rem;
    animation: ${blink} var(--loader-speed);
`;
