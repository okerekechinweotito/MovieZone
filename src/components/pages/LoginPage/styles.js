import styled from "styled-components";
import { motion } from 'framer-motion';

import Button from "components/shared/Button";
import respondTo from "util/respondTo";

export const Main = styled.main`
    height: 100vh;
    background: var(--main-dark);
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${respondTo.md`
        grid-template-columns:1fr;
        grid-template-rows:300px 1fr;
        justify-items:center;
        align-items:center;
    `}

    ${respondTo.sm`
        grid-template-rows:200px 1fr;
        height:80vh;
        `}

${respondTo.cp`
        grid-template-rows: 1fr;
        padding-top:3rem;
    `}
`;

export const Content = styled(motion.div)`
    padding: 1rem;
    display: grid;
    place-items: center;
    height: 100%;
    align-content: center;
    gap: 1rem;
`;

export const BG = styled(motion.img)`
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(80%);

    ${respondTo.md`
        order:-1;
        margin-bottom:2rem;
    `}
    ${respondTo.cp`
        display:none;
    `}
`;

export const Logo = styled(motion.img)`
    display: block;
    width: 200px;
    margin: auto;
`;

export const H1 = styled(motion.h1)`
    text-align: center;
    letter-spacing: 3px;
    text-shadow: 3px 3px 0 rgba(white, 0.4);
    line-height: 1.5;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;

    span{
        color:transparent;
        background-image:var(--moviedb-gradient);
        -webkit-background-clip:text;
        background-clip:text;
    }
`;

export const Form = styled.form`
    padding: 1rem;
    border-radius: 1rem;
    display: grid;
    gap: 1rem;
`;

export const Field = styled.div`
    width: 100%;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
`;

export const Input = styled.input`
    padding: 0.5rem 1.5rem;
    font-size: 1.1rem;
    width: 100%;
    display: block;
    border: 2px solid gray;
    background: transparent;
    color: white;

    &:focus,
    &:active {
        border-color: var(--main-color);
    }
`;

export const Btn = styled(Button)`
    display: block;
    width: 100%;
    margin-top: 1rem;
`;

export const SubBtn = styled(Button)`
    display: block;
    width: 100%;
    background: transparent;
    color: var(--main-color);
    border: 1px solid var(--main-color);

    &:hover {
        background: var(--main-color);
        color: white;
    }
`;

export const ErrorMsg = styled.span`
    display: inline-block;
    margin-top: 10px;
    font-size: 12px;
    display: none;
`;

export const Buttons = styled.div`
    width:90%;
    margin:0 auto;
    display:grid;
    gap:1.5rem;
`
