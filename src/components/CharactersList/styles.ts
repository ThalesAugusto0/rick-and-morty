import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 3rem 3rem;

  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Title = styled.h1`
  color: var(--text);
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));

  width: 100%;

  @media screen and (max-width: 375px) {
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));

    align-items: center;
    justify-content: center;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  margin-right: 3rem;

  @media screen and (max-width: 375px) {
    margin-right: 0;
    margin-top: 1rem;
  }

  input {
    background-color: #f5f5f5;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    color: var(--text);
    font-size: 1rem;
    padding: 0.5rem 1rem;
    width: 20rem;
    transition: all 0.2s ease-in-out;

    &:focus {
      outline: none;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
    }

    &::placeholder {
      color: var(--text-muted);
    }
  }

  button {
    background-color: var(--primary);
    border: none;
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #5f5f5f;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;
