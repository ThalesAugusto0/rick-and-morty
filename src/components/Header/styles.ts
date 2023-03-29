import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 7rem;

  padding: 0 3rem;

  background-color: var(--blue);

  box-shadow: gray 0px 0.5px 9px 0px;

  @media screen and (max-width: 375px) {
    width: 100%;
    height: 5rem;

    padding: 0;
    padding-left: 1.5rem;
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: 70px;

  background-color: transparent;

  cursor: pointer;

  @media screen and (max-width: 375px) {
    width: 100px;
    height: 35px;
  }

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 50px;
  }
`;

export const NavBar = styled.nav`
  width: 500px;
  height: 15px;

  background-color: green;
`;
