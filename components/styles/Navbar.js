import styled from 'styled-components';

export const NavBar = styled.div`
  grid-column: center-start/center-end;
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0;
  padding-top: 2rem;
  height: max-content;
  position: relative;
  z-index: 67;
  border-bottom: 1.4px solid white;
  align-items: center;
  h3 {
    font-family: Tusker;
    font-weight: 500;
    font-size: 1.79rem;
  }
  div {
    display: flex;
    align-items: flex-start;
  }
`;
