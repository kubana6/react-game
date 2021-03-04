import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  aside {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 0 20px;
  }
  .keyBoard {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .arrowsLeftAndRigth {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .arrow {
    width: 25px;
    height: 25px;
    background-color: white;
  }
  .arrow:active {
    background-color: gray;
  }
`;
