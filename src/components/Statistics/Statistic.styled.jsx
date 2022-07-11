import styled from 'styled-components';

export const Statistic = styled.section`
  margin: 100px 300px;
  text-align: center;
  padding: 40px;
  background-color: aliceblue;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 32px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const Items = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${getRandomHexColor};
  padding: 15px;
  border: 1px solid black;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
