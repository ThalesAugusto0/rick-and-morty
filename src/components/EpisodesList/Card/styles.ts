import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 350px;
  height: 200px;

  border-radius: 10px;

  margin: 2rem 0;
  padding: 3rem 0;

  box-shadow: gray 0px 7px 15px 0px;

  background-color: var(--text-body);

  &:hover {
    border: 3px solid var(--blue);
  }

  @media screen and (min-width: 200px) {
    width: 200px;
    height: 200px;

    box-shadow: none;

    text-align: center;
  }

  @media screen and (min-width: 360px) {
    width: 200px;
    height: 200px;

    box-shadow: none;

    text-align: center;
  }

  @media screen and (min-width: 461px) {
    width: 275px;
    height: 200px;

    box-shadow: none;

    text-align: center;
  }

  @media screen and (min-width: 769px) {
    width: 300px;
    height: 200px;

    text-align: center;

    box-shadow: gray 0px 7px 15px 0px;
  }

  @media screen and (min-width: 1025px) {
    width: 300px;
    height: 200px;

    text-align: center;

    box-shadow: gray 0px 7px 15px 0px;
  }
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;

  color: var(--background);

  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`;

export const EpisodeName = styled.p`
  font-size: 16px;
  color: var(--background);

  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`;

export const EpisodeAirDate = styled.p`
  font-size: 16px;
  color: var(--background);

  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`;

export const EpisodeCreated = styled.p`
  font-size: 16px;
  color: var(--background);

  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`;

export const EpisodeCharacters = styled.p`
  font-size: 16px;
  color: var(--background);

  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`;
