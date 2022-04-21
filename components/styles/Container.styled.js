import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] 4rem [center-start] repeat(12, [col-start] 1fr [col-end])
    [center-end] 4rem [full-end];
  scrollbar-width: none;
  grid-template-rows: max-content 88vh;
  height: 100vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('/images/FOLDED-02.png');
    background-blend-mode: overlay;
    background-color: #101010;
    opacity: 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 4;
    top: 0;
    left: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
