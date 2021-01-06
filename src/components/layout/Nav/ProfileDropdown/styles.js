import styled from "styled-components";
import { motion }  from 'framer-motion';

export const DropdownHead = styled(motion.ul)`
    display: inline-block;
    position: relative;
    text-align: center;
    cursor: pointer;
    border-radius: 1rem;
`;

export const DropdownItem = styled.li`
    padding: 0.7rem 3rem;
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

export const DropdownButton = styled(motion.span)`
    display: block;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    position: relative;

    &:hover::before,
    &:hover::after {
        opacity: 1;
    }

    &::before {
        content: "Login";
        display: block;
        background: white;
        padding: 0.4rem;
        text-transform: initial;
        letter-spacing: initial;
        color: black;
        font-size: 12px;
        position: absolute;
        width: max-content;
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
        border: 1px solid white;
        opacity: 0;
    }

    &::after {
        content: "";
        display: block;
        box-sizing: content-box;
        border-bottom: 20px solid white;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -20px;
        opacity: 0;
    }
`;

export const DropdownBody = styled.div`
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    position: absolute;
    top: 110%;
    left: 50%;
    transform:translateX(-50%);
    background: var(--main-dark-5);
    box-shadow:0 0 5px rgba(255,255,255,0.5);

    &::after {
        content: "";
        display: block;
        box-sizing: content-box;
        border-bottom: 20px solid var(--main-dark-5);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -20px;
        filter:drop-shadow(0 -5px 5px rgba(255,255,255,0.5));
    }
`;

export const UserIcon = styled.svg`
    width: 2.5rem;
    height: 2.5rem;
    fill: white;
`;
