import styled from 'styled-components';

const Alert = styled.p`
    padding: 1rem 2rem;
    background: ${({ user }) => (user ? "limegreen" : "crimson")};
    color: white;
    display: ${({ isDisplayed }) => (isDisplayed ? "block" : "none")};
    position: fixed;
    z-index: 10000;
    top: 20%;
    left: 50%;
    font-size:1.1rem;
    transform: translate(-50%, -50%);
    border-radius:1rem;
`;

export default Alert