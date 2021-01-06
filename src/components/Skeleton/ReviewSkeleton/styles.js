import styled from "styled-components";
import { blink } from '../../../assets/animations';


export const ReviewBody = styled.div`
    width: 90%;
    display: grid;
    gap: 1rem;
    margin: 3rem auto;
    animation: ${blink} var(--loader-speed);
`;

export const SampleReview = styled.div`
    width: 100%;
    background: var(--main-mid);
    height: 200px;
`;
