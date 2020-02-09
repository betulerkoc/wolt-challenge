import styled from 'styled-components';

export const ListStyle = styled.div `
    text-align: center;
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 30px;
`;