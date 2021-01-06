import styled from "styled-components";
import respondTo from "util/respondTo";

export const MobileNavMain = styled.nav`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: max-content;
    background-color: var(--main-dark);
    z-index: 1000;
    padding: 2rem 0;
    transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(-100%)"};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    transition: 500ms;

    ul {
        display: block ;
        div {
            position: static;
            opacity: 1;
            li {
                display: block;
                a {
                    font-size: 14px;
                }
            }
        }
    }

/*Experimental Search Card  */
    /* a li{
        display:flex;
    } */

    ${respondTo.md`
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;   

            & > *:not(:last-child){
            margin-bottom: 1rem;
        }
        form {
            display: block !important;
        input {
            margin:auto;
            font-size: inherit;
        }
    }
        `}

    & a:hover {
        color: var(--main-color);
    }
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
    svg {
        fill: white;
    }
    &:hover svg {
        fill: var(--main-color);
    }
`;

export const Logo = styled.img`
    width: 12rem;
`;

export const MenuHolder = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    & > * {
        margin: 5px;
    }
`;
