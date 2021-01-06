import styled from "styled-components";

export const Card = styled.li`
    width: 90%;
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
    background-color: var(--main-dark);
    margin: 0 auto;
    &:hover {
        background-color: var(--main-mid);
    }
`;

export const Poster = styled.img`
    width: 30px;
    display: block;
`;

export const Title = styled.span`
    display: inline-block;
    flex: 1;
    margin: 0 0.5rem;
    font-size: 0.8rem;
    height: 1.5rem;
    overflow: hidden;
    text-align: center;
`;

export const MiniPoster = styled.div`
    width: 30px;
    height: 45px;
    background: var(--main-dark-5);
`;
