import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  @media screen and (max-width: 375px) {
    align-items: center;

    width: 100%;
  }

  @media screen and (max-width: 768px) {
    align-items: center;

    width: 100%;
  }
`;
