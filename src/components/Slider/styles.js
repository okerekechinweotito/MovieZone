import styled from "styled-components";
import { motion } from "framer-motion";
import Title from "components/shared/Title";
import Container from "components/shared/Container";

export const SliderContainer = styled(motion.div)`
    height: auto;
`;

export const SliderTitle = styled(Title)`
    margin-bottom: 1rem;
    font-size: 1.3rem;
`;

export const Holder = styled(Container)`
    padding: 20px 0;
`;
