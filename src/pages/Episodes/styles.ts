import styled from "styled-components";

export const Container = styled.div``;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin: 2rem 0;
`;

export const PageTitle = styled.h1`
  color: var(--text);
  padding: 3rem 0;
`;

export const SeasonTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: var(--green);

  margin-bottom: 1rem;
`;
