import styled from 'styled-components';

export const StyledImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 0.5rem; /* соответствует классу mb-2 */
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px; /* Отступы между элементами */
`;
