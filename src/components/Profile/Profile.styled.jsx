import styled from 'styled-components';

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  border: 2px solid rgba(167, 165, 164, 0.5);
  box-shadow: plum;
  background-color: antiquewhite;
`;

export const Desc = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  max-width: 190px;
  display: block;
  border-radius: 50%;
  margin: 20px auto;
  border: 5px solid #000;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;

  border-top: 2px solid rgba(167, 165, 164, 0.5);
  /* padding-top: 10px; */
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: calc(100% / 3);
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid rgba(167, 165, 164, 0.5);
  }
`;
