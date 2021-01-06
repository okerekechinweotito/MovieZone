import styled from "styled-components";
import { blink } from "assets/animations";

export const RecomBody = styled.div`
    width: 90%;
    margin: 3rem auto;
    display: grid;
    gap: 1rem;
    animation: ${blink} var(--loader-speed);
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
`;

export const SampleRecom = styled.div`
    width: 100%;
    height: 250px;
    background: var(--main-mid);
`;
