import styled from "styled-components";

import Icon from "components/shared/Icon";
import Container from "components/shared/Container";
import respondTo from 'util/respondTo'

export const Footer = styled.footer`
    background-color: var(--main-dark-5);
    padding: 2rem 0;
    margin-top:1.5rem;
    display: ${({ isDisplayed }) => (isDisplayed ? "block" : "none")};

`;

export const FooterContainer = styled(Container)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;

    ${respondTo.sm`
       display: grid;
        gap:1rem;
        grid-template-columns: repeat(2,1fr);
        justify-content: center;
        justify-items: center;
        text-align: center;

        & > * {
            margin-bottom: 1rem;
        }
    `}
`;

export const DBLogo = styled.img`
    width: 5rem;
`;

export const LogoLink = styled.a`
    display: grid;
    gap: 0.4rem;
`;

export const SocialIcon = styled(Icon)`
    width: 2.5rem;
    height: 2.5rem;
`;

export const SocialLink = styled.a`
    &:hover svg {
        fill: var(--main-color);
    }
`;

export const Note = styled.p`
    display:flex;
    align-items:center;

    a{
        margin-left:5px;
        color:var(--main-color);
    }
    
    ${respondTo.sm`
        grid-column:1/-1;
        grid-row:2/3;
    `}
`;
