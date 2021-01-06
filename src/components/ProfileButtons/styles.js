import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "components/shared/Button";
import respondTo from "util/respondTo";

export const MovieButton = styled(Button)`
    display: flex;
    align-items: center;
    margin: 0.5rem;

    svg {
        margin-right: 5px;
    }
`;

export const ButtonHolder = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    ${respondTo.sm`
        justify-content:center;
    `}
`;
