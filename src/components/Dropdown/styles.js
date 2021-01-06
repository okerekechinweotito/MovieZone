import styled from "styled-components";
import { motion } from "framer-motion";

export const DropdownHead = styled(motion.ul)`
    display: inline-block;
    position: relative;
    text-align: center;
    cursor: pointer;
    border-radius: 1rem;
    &:hover span {
        background: var(--main-dark);
    }

    &:hover div {
        top: 100%;
        opacity: 1;
        pointer-events: all;
    }
`;

export const DropdownItem = styled.li`
    padding: 0.7rem 1rem;
    width: auto;
    font-size: 0.9rem;
    a {
        &:link,
        &:visited {
            color: inherit;
        }
        &:hover {
            color: var(--main-color);
        }

        &:active {
            color: var(--main-color);
        }
    }
`;

export const DropdownButton = styled.span`
    display: block;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    letter-spacing: 4px;
`;

export const DropdownBody = styled.div`
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--main-dark);
`;
