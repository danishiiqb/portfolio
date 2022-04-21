import styled from 'styled-components';

export const HeroElem = styled.div`
  grid-column: full-start/center-end;
  padding-left: 4rem;
  margin-top: 2rem;
  z-index: 6;

  z-index: 5;
  border-top-right-radius: 2rem;
  background-blend-mode: overlay;
  border-bottom-right-radius: 2rem;
  box-shadow: 0 0 2rem #ff0000;
  background-color: #ffaaaa;
  background-image: url('/images/2.jpg');
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  text-shadow: 0px 1px 1rem rgba(15, 15, 15, 0.29);

  div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  h1 {
    font-weight: 800;
    line-height: 1;
    font-size: 10rem;
  }
`;
