import styled from "styled-components";
import { motion } from "framer-motion";
import Container from "components/shared/Container";

export const RecommendationsMain = styled(motion.div)`
    padding: ${({ length }) => (length === 0 ? 0 : "2rem")} 0;
`;

export const Title = styled.h2`
    margin-bottom: 1rem;
    text-align: center;
`;

export const RecommendationsContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 1rem;
`;
