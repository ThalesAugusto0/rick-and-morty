import styled from "styled-components";

interface Props {
  expanded: boolean;
}

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;

  height: 60px;
  width: 100%;

  padding: 0.5rem 0rem;

  color: #20bf55;
`;

export const NavigationMenu = styled.div<Props>`
  margin-left: auto;

  ul {
    display: flex;
  }

  li {
    list-style-type: none;

    margin: 0 1rem;
  }

  li a {
    display: block;

    width: 100%;

    font-size: 16px;

    text-decoration: none;

    transition: all 0.3s;

    &:visited {
      color: inherit;
    }

    &:hover {
      text-decoration: underline;
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 768px) {
    display: ${({ expanded }) => (expanded ? "block" : "none")};

    z-index: 10;

    ul {
      position: fixed;
      top: 100px;
      left: 0;

      flex-direction: column;

      width: 100%;
      height: 900px;

      list-style: none;

      background-color: var(--blue);

      border: 1px solid black;
    }

    li {
      text-align: center;
      margin: 0;
    }

    li a {
      width: 100%;

      text-decoration: none;
      color: black;

      padding: 1.5rem 0;
    }

    li:hover {
      background-color: var(--blue);
      text-decoration: none;
    }
  }
`;

export const HamburguerButton = styled.button`
  display: none;

  height: 40px;
  width: 40px;

  border: 0;
  border-radius: 50%;

  padding: 0.5rem;

  background-color: #283b8b;

  cursor: pointer;

  position: absolute;
  top: 50%;
  right: 25px;

  transition: background-color 0.2s ease-in-out;
  transform: translateY(-50%);

  &:hover {
    background-color: #2642af;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Divider = styled.hr`
  display: none;

  width: 100%;
  height: 1px;

  border: 0.5px solid var(--background);

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
