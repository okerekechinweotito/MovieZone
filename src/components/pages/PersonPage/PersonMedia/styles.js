import styled from 'styled-components';
import Container from "components/shared/Container";


const MediaHolder = styled.div`
    display:grid;
    gap:1rem;

`;

const Title = styled.h2`
    text-align:center;
`;


const Wrapper = styled(Container)`
    padding:2rem 0;
`

export { MediaHolder, Title,Wrapper }