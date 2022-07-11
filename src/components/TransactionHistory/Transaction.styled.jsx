import styled, { keyframes } from 'styled-components';
const gradient = keyframes`	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}`;

export const Container = styled.div`
  margin-top: 50px;
`;
export const Table = styled.table`
  width: 100%;
  border: none;
  margin-bottom: 20px;
  text-align: center;
`;
export const Head = styled.th`
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #683769;
  font-size: 14px;

  :first-child {
    border-radius: 8px 0 0 8px;
  }
  :last-child {
    border-radius: 0 8px 8px 0;
  }
`;
export const Data = styled.td`
  text-align: left;
  padding: 10px 15px;
  font-size: 14px;

  :first-child {
    border-radius: 8px 0 0 8px;
  }
  :last-child {
    border-radius: 0 8px 8px 0;
  }
`;
export const List = styled.tr`
  :nth-child(even) {
    background: #f3f3f3;
  }

  :hover {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    animation: 5s ${gradient} ease infinite;
  }
`;
