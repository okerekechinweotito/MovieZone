import styled from "styled-components";
import { motion } from 'framer-motion'

import Container from "components/shared/Container";
import respondTo from "util/respondTo";
import Icon from "components/shared/Icon";

export const NavStyle = styled.nav`
    width: 100%;
    top: 1rem;
    left: 0;
    z-index: 500;
    position: absolute;
    display: ${({ isDisplayed }) => (isDisplayed ? "block" : "none")};
    
        ${respondTo.md`
            ul, li, form{
                display:none;
            }
    `};
`;

export const NavContainer = styled(Container)`
    display: flex;
    height: 10vh;
    align-items: center;
    padding: 1rem 0;

    & .logo-link {
        margin-right: auto;
    }
`;

export const Logo = styled(motion.img)`
    ${respondTo.sm`
        width:12rem;
    `}
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    ${respondTo.md`
        display:none;
    `}
`;

export const NavItem = styled.li`
    margin: 0 1rem;

    & a {
        &:hover {
            color: var(--main-color);
        }
    }
`;

export const UserIcon = styled(Icon)`
    width: 2.5rem;
    height: 2.5rem;
    fill: white;
`;

export const Menu = styled.button`
    display: none;
    ${respondTo.md`
        display: inline-block;
        &:hover .icon{
            fill:$main-color
        }
    `}
`;
