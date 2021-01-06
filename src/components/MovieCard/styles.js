import styled from "styled-components";
import Icon from "../shared/Icon";

export const Card = styled.figure`
    overflow: hidden;
    border-radius: 1rem;
    position:relative;
    &:hover .content {
        transform: translateY(0);
        opacity: 1;
        background:var(--contentBg);
    }

    &:hover img {
        filter: brightness(50%);
    }
`;

export const Poster = styled.img`
    display: block;
    width: 100%;
    height: 300px;
    border-radius: 1rem;
    object-fit: cover;
    object-position:center;
`;

export const Content = styled.div`
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    align-content: center;
    gap: 1rem;
    transition: 500ms ease-in-out;
    transform: translateY(1rem);
    opacity: 0;
    font-size:1.1rem;
    padding:5px;
`;

export const Title = styled.h3``;

export const Date = styled.p``;

export const Rating = styled.p`
    display: flex;
    align-items: center;
`;

export const StarIcon = styled(Icon)`
    margin-right: 10px;
    fill: var(--main-color);
`;

