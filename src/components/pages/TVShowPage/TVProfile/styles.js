import styled from "styled-components";
import { motion } from "framer-motion";

import Container from "../../../shared/Container";
import Button from "../../../shared/Button";
import respondTo from "../../../../util/respondTo";

export const Profile = styled.header`
    position: relative;
`;

export const ProfileContainer = styled(Container)`
    min-height: 100vh;
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 2rem;
    align-items: center;
    padding-bottom: 2rem;
    padding-top: 20vh;

    ${respondTo.md`
        grid-template-columns: 1fr;
        justify-items: center;
        align-content: center;
        padding-top:20vh;
    `}
`;

export const Backdrop = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: brightness(25%) hue-rotate(5deg);
    z-index: 1;
`;

export const Content = styled(motion.div)`
    display: grid;
    gap: 1rem;
    justify-items: start;

    ${respondTo.md`
        text-align: center;
        justify-items: center;
    `}
`;

export const Genres = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const Stats = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    gap: 10px;

    & > * {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ${respondTo.md`
        justify-items:center;
        align-content:center;
        grid-template-columns:repeat(2,max-content);
    `}
    ${respondTo.sm`
        grid-template-columns:1fr;
    `}
`;

export const Stat = styled.li`
    display: flex;
    align-items: center;
    font-weight: bold;

    ${respondTo.md`
        margin-bottom:1rem;
    `}

    svg {
        fill: var(--main-color);
        margin-right: 10px;
    }

    span {
        display: inline-block;
        padding-left: 5px;
        font-weight: normal;
    }
`;

export const MovieButton = styled(Button)`
    display: flex;
    align-items: center;
`;

export const Poster = styled(motion.img)``;

export const Overview = styled.p``;
export const ShowTitle = styled.h2`
    display: grid;
    gap: 10px;

    ${respondTo.md`
        justify-items:center;
    `}
`;
