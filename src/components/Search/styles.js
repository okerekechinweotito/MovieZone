import styled from "styled-components";
import { ringAnim } from 'assets/animations';
import Icon from "components/shared/Icon";
import { motion } from 'framer-motion'

export const SearchForm = styled(motion.form)`
    margin-right: 1rem;
    position: relative;
`;

export const FieldContainer = styled.div`
    position: relative;
`;

export const SearchInput = styled.input`
    border: 1px white solid;
    background: rgba(var(--main-dark), 0.5);
    border-radius: 2rem;
    padding: 0.5rem 1rem 0.5rem 3rem;
    color: white;
    outline: none;
    max-width: 250px;

    &:focus,
    &:active {
        border-color: var(--main-color);
    }

    &:focus + .search__icon,
    &:active + .search__icon {
        fill: var(--main-color);
    }
`;

export const SearchIcon = styled(Icon)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
`;
export const SearchLoader = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid var(--main-color);
        border-radius: 50%;
        animation: ${ringAnim} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: var(--main-color) transparent transparent transparent;
    }

    & div:nth-child(1) {
        animation-delay: -0.45s;
    }
    & div:nth-child(2) {
        animation-delay: -0.3s;
    }
    & div:nth-child(3) {
        animation-delay: -0.15s;
    }

    position: absolute !important;
    transform: scale(0.25);
    right: -1rem;
    top: -1rem;
`;

