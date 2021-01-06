import styled from "styled-components";
import Container from "components/shared/Container";
import Icon from "components/shared/Icon";
import { blink } from "assets/animations";

export const TrailerStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--main-dark-3);
    display: grid;
    place-items: center;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
    z-index: 99999;
`;

export const TrailerContainer = styled(Container)`
    width: 80%;
    height: 80vh;
    border-radius: 1rem;
    display: grid;
    place-items: center;
    text-align: center;

    & .swiper-container {
        width: 100%;
        height: 100%;
        border-radius: 1rem;

        & .swiper-slide iframe {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
        }
    }

    & h2 {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
        text-align: center;
        margin: 0;
        background-color: var(--main-mid);
    }
`;

export const TrailerButton = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
`;

export const CloseIcon = styled(Icon)`
    width: 2.5rem;
    height: 2.5rem;
    fill: white;
`;

export const TrailerSkeleton = styled(TrailerContainer)`
    position: absolute;
    z-index: 50;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    background: var(--main-mid);
    animation: ${blink} var(--loader-speed);
`;
