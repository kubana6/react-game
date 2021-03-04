import styled from 'styled-components';

export const StyledDisplay = styled.div<styledTypes>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
  padding: 10px;
  border: 4px solid #333;
  min-height: 20px;
  width: 200px;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 16px;
`;
type styledTypes = {
  gameOver: boolean;
};
