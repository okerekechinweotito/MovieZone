import styled from "styled-components";
import { motion } from 'framer-motion';
import Container from "components/shared/Container";
import respondTo from 'util/respondTo';

export const Wrapper = styled.div`
    padding-top: 20vh;

    ${respondTo.md`
        padding-top:15vh;
    `}
`;

export const CollectionContainer = styled(Container)`
    padding: 2rem 0 3rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 2rem;
    justify-items: start;

    & a{
        display:block;
        width:100%;
    }
`;

export const Title = styled(motion.h2)`
    text-align:center;
    margin-bottom:1rem;
`;

