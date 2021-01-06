import styled from "styled-components";
import { blink } from "assets/animations";

export const PageBody = styled.div`
    padding-top: 12vh;
    width: 90%;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
    gap: 2rem;
    justify-items: start;
    animation: ${blink} var(--loader-speed);
`;

export const SampleCard = styled.div`
    background: var(--main-mid);
    width: 100%;
    height: 300px;
    border-radius: 1rem;
`;
