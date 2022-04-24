import styled from 'styled-components';

export const NavBar = styled.div`
  grid-column: center-start/center-end;
  display: flex;
  justify-content: space-between;

  padding-top: 1.2rem;
  height: max-content;
  position: relative;
  z-index: 67;

  align-items: center;
  .navbar {
    position: absolute;
    top: 100%;
    left: 0;
    width: 14%;
    height: 2%;
    opacity: 0;
    background-color: white;
  }
  .links > a:first-child {
    position: relative;
    top: 0.2rem;
  }
  .links,
  .logo {
    opacity: 0;
    display: flex;
    align-items: flex-start;
  }
  h3 {
    font-family: Tusker;
    font-weight: 500;
    font-size: 1.79rem;
  }
`;
