import styled from "styled-components";
import { motion } from 'framer-motion';

const Button = styled(motion.button)`
    font-size: 1.1rem;
    color: white;
    background-color: var(--main-color);
    padding: 0.5em 1.5em;
    justify-content: space-evenly;
    border-radius: 2rem;

    &:hover {
        background:var(--main-color-2);
        box-shadow: 0 0 1.5rem var(--main-color);
        transform: translateY(-5px);
    }

    &:active{
        transform: translateY(0px);
        box-shadow: 0 0 0.5rem var(--main-color);

    }
`;

export default Button;