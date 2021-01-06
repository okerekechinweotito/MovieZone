import styled from "styled-components";
import { motion } from 'framer-motion';

import Container from "components/shared/Container";
import Button from "components/shared/Button";
import respondTo from "util/respondTo";

export const FeaturedStyle = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-size: cover;
    background-position: center;
    padding-top:12vh;
    box-sizing:border-box;

    ${respondTo.md`
        justify-content: center;
        padding-top:20vh;
        height:120vh;
    `}
`;

export const BGWrapper = styled.div``;

export const BG = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -4;
    object-fit: cover;
    filter: brightness(40%);
`;

export const Genres = styled(motion.ul)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 1rem 0;
`;

export const FeaturedContainer = styled(Container)`
    display: flex;
    align-items: center;
    padding-bottom: 3rem;

    ${respondTo.md`
        flex-direction: column;
        justify-content: center;
    `}
`;

export const Content = styled.div`
    flex: 1;

    ${respondTo.md`
        order:3;
        margin-top:1rem;
        h2{
            text-align:center;
        }
    `}
`;

export const Description = styled(motion.p)`
    width: 80%;
    margin-bottom: 1rem;

    ${respondTo.md`
        width: 100%;
    `}
`;

export const FeaturedButton = styled(Button)`
    display: inline-flex;
    align-items: center;
    text-align: center;

    ${respondTo.md`

        position: relative;
        left: 50%;
        transform: translateX(-50%);
        &:hover{
            transform: translateX(-50%) translateY(-5px);
        }
    `}
`;

export const Cover = styled.div`
    margin-left: 3rem;

    ${respondTo.md`
        margin-left: 0;
    `}
`;
