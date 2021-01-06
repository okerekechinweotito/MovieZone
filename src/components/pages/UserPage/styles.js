import styled from "styled-components";
import Container from "components/shared/Container";
import BG from "assets/img/profileBG.jpg";
import respondTo from 'util/respondTo';

export const HeaderBG = styled.div`
    margin-top: 15vh;
    height: 40vh;
    padding: 1.5rem 0;
    background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.8)
        ),
        url(${BG});
    background-size: cover;
    background-position: center;
`;

export const User = styled(Container)`
    display: grid;
    grid-template-columns: auto 1fr;
    gap:15px;
    align-items:center;

    ${respondTo.sm`
        grid-template-columns: 1fr;
        justify-items:center;
        text-align:center;
    `}
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width:11rem;
    height:11rem;
    fill:white;
`;


export const UserDetails = styled.div``

export const Username = styled.h1`
    color:var(--main-color);
    text-shadow:2px 2px 0 var(--main-dark);
`;

export const Joined = styled.p``;
