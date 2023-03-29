import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  width: 250px;
  height: 400px;

  box-shadow: gray 0px 7px 15px 0px;

  padding: 3rem 0;
  margin: 2rem 0;

  border-radius: 8px;

  background-color: var(--text-body);

  &:hover {
    border: 3px solid var(--blue);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  text-align: center;

  width: 100%;

  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  text-align: center;

  width: 100%;

  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export const ImageContainer = styled.img`
  width: 125px;
  height: 125px;

  border-radius: 10px;

  margin-bottom: 5px;
`;

export const Name = styled.h1`
  text-align: center;

  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export const Species = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: #000;
`;

export const Status = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: #000;
`;

export const Gender = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: #000;
`;

export const Origin = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: #000;
`;
